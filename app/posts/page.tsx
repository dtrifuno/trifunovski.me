import _ from 'lodash'
import { Metadata } from 'next'
import Link from 'next/link'
import path from 'path'
import React from 'react'

import Date from '@/app/components/date'
import { getPosts } from '@/lib/posts'

export const generateMetadata = async (): Promise<Metadata> => ({
  title: 'Posts',
  description: 'A list of published blog posts.',
  openGraph: {
    title: 'Posts · Darko Trifunovski',
    url: '/posts/',
    description: 'A list of published blog posts.',
  },
})

const Posts = async (): Promise<React.ReactElement> => {
  const posts = await getPosts(path.join(process.cwd(), 'posts'))
  const groupedByYear = _.groupBy(posts, (p) =>
    p.frontMatter.date.getFullYear(),
  )

  return (
    <>
      <h1>Posts</h1>
      <ul className="list-none list-inside not-prose">
        {Object.keys(groupedByYear)
          .sort()
          .reverse()
          .map((year) => (
            <></>
            // <li key={year} className="mt-5 mb-9">
            //   <h3 className="text-2xl font-bold mb-3">{year}</h3>
            //   <ul className="list-none list-inside">
            //     {_(groupedByYear[year])
            //       .sortBy((post) => post.frontMatter.date)
            //       .reverse()
            //       .map((post) => (
            //         <li key={post.slug} className="my-5">
            //           <div className="uppercase font-bold my-0 py-0">
            //             <Date date={post.frontMatter.date} />
            //           </div>
            //           <Link
            //             className="text-lg md:text-xl"
            //             href={`/posts/${post.slug}`}
            //           >
            //             {post.frontMatter.title}
            //           </Link>
            //         </li>
            //       ))
            //       .value()}
            //   </ul>
            // </li>
          ))}
      </ul>
    </>
  )
}

export default Posts
