import { Metadata, ResolvingMetadata } from 'next'
import path from 'path'
import React from 'react'

import PostLayout from '@/app/components/postLayout'
import { getPost, getPosts } from '@/lib/posts'

const POSTS_DIR = path.join(process.cwd(), 'posts')

interface Params {
  slug: string
}

interface Props {
  params: Params
}

export const generateStaticParams = async (): Promise<Params[]> => {
  // let posts = (await getPosts(POSTS_DIR)).map((post) => ({
  //   slug: post.slug,
  // }))
  // console.log(posts)
  // return posts
  let posts = (await getPosts(POSTS_DIR)).map((post) => ({
    slug: post.slug,
  }))
  console.log(posts)
  return posts
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const postData = await getPost(POSTS_DIR, params.slug)

  const result: Metadata = {
    title: postData.frontMatter.title,
    openGraph: {
      type: 'article',
      title: `${postData.frontMatter.title} · Darko Trifunovski`,
      url: `/posts/${params.slug}/`,
    },
  }

  if (postData.frontMatter.description) {
    result['description'] = postData.frontMatter.description
    result.openGraph!['description'] = postData.frontMatter.description
  }

  return result
}

const PostPage = async ({ params }: Props): Promise<React.ReactElement> => {
  const {
    contentHtml,
    frontMatter: { title, date, description },
  } = await getPost(POSTS_DIR, params.slug)
  return (
    <PostLayout
      date={date}
      title={title}
      description={description}
      contentHtml={contentHtml}
    />
  )
}

export default PostPage
