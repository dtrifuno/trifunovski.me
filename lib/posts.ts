import fs from 'fs'
import path from 'path'

import rehypePrism from '@mapbox/rehype-prism'
import { glob } from 'glob'
import matter from 'gray-matter'
import rehypeKatex from 'rehype-katex'
import rehypeRewrite from 'rehype-rewrite'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

import macros from '../katex-macros'

// Based on https://github.com/vercel/next.js/issues/51860#issuecomment-1609019374

const re = /\/(?<slug>[\w\-]+)[.]md$/

interface PostFrontMatter {
  title: string
  date: Date
  description?: string
  image?: string
}

type PostMetadata = {
  slug: string
  filePath: string
  frontMatter: PostFrontMatter
}

type Post = PostMetadata & {
  contentHtml: string
}

const extractFrontMatter = (
  parsedMd: matter.GrayMatterFile<string>,
): PostFrontMatter => {
  const requiredFrontMatter = ['title', 'date'] as const
  const defaultFrontMatter = {} as const

  const { data } = parsedMd

  for (const key of requiredFrontMatter) {
    if (!(key in data)) {
      throw new Error(`Missing required field ${key}.`)
    }
  }

  return {
    ...defaultFrontMatter,
    ...data,
  } as PostFrontMatter
}

export const getPosts = async (directory: string): Promise<PostMetadata[]> => {
  const globPattern = path.join(directory, '*.md')
  const mdxFiles = await glob(globPattern)

  return mdxFiles.map((filePath) => {
    const match = re.exec(filePath)
    if (!match) {
      throw new Error(`Invalid Post filename ${filePath}.`)
    }
    const slug = match.groups!.slug

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const matterResult = matter(fileContents)
    const frontMatter = extractFrontMatter(matterResult)

    return {
      slug,
      filePath,
      frontMatter,
    }
  })
}

export const getPost = async (
  directory: string,
  slug: string,
): Promise<Post> => {
  const filePath = path.join(directory, `${slug}.md`)

  const match = re.exec(filePath)
  if (!match) {
    throw new Error(`Invalid Post filename ${filePath}.`)
  }
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const matterResult = matter(fileContents)
  const frontMatter = extractFrontMatter(matterResult)

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex, { macros })
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeRewrite as any, {
      rewrite: (node: any) => {
        if (
          node.type === 'element' &&
          node.tagName === 'code' &&
          Object.getOwnPropertyNames(node.properties).length === 0
        ) {
          node.properties = {
            ...node.properties,
            className: ['language-text'],
          }
        }
      },
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    contentHtml,
    slug,
    filePath,
    frontMatter,
  }
}
