import { Metadata, ResolvingMetadata } from 'next'
import path from 'path'
import React from 'react'

import PostLayout from '@/app/components/postLayout'
import { getPost, getPosts } from '@/lib/posts'

const DRAFTS_DIR = path.join(process.cwd(), 'drafts')

interface Params {
  slug: string
}

interface Props {
  params: Params
}

export const generateStaticParams = async (): Promise<Params[]> =>
  (await getPosts(DRAFTS_DIR)).map((post) => ({
    slug: post.slug,
  }))

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const postData = await getPost(DRAFTS_DIR, params.slug)

  const result: Metadata = {
    title: `[DRAFT] ${postData.frontMatter.title}`,
    openGraph: {
      type: 'article',
      title: `[DRAFT] ${postData.frontMatter.title} · Darko Trifunovski`,
      url: `/drafts/${params.slug}/`,
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
  } = await getPost(DRAFTS_DIR, params.slug)
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
