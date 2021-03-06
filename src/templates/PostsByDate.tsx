import React from 'react'
import { graphql, Link } from 'gatsby'

import BlogEntry from '../components/BlogEntry'
import Layout from '../components/Layout'
import Paginator from '../components/Paginator'

import { PageContext } from '../types'
import { BlogListRecentQuery } from '../types'
import clsx from 'clsx'
import SEO from '../components/SEO'

interface Props {
  data: BlogListRecentQuery
  pageContext: PageContext
}

const BlogList: React.FC<Props> = ({ pageContext, data }) => {
  const posts = data.allMdx.nodes
  const { currentPage, numPages } = pageContext
  const title =
    numPages === 1 ? `Posts` : `Posts (${currentPage} of ${numPages})`

  return (
    <Layout>
      <SEO title={title} />
      <div className={clsx('max-w-4xl', 'mx-auto', 'my-3', 'md:my-5')}>
        <h2 className={clsx('text-3xl', 'lg:text-4xl', 'font-bold', 'mb-0')}>
          Recent Posts
        </h2>
        <Link
          className={clsx('text-xl', 'text-primary-500', 'hover:underline')}
          to="/tags"
        >
          (view posts by tag instead)
        </Link>
        <ul className={clsx('list-none', 'py-4', 'lg:py-6')}>
          {posts.map(post => (
            <BlogEntry entry={post} key={post.id} />
          ))}
        </ul>
        {numPages !== 1 ? (
          <Paginator url="/posts" pageContext={pageContext} />
        ) : undefined}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogListRecent($limit: Int, $skip: Int) {
    allMdx(
      filter: { fields: { slug: { regex: "/^/post//" } } }
      sort: {
        fields: [frontmatter___date, frontmatter___title]
        order: [DESC, ASC]
      }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          title
          subtitle
          tags
          date
          last_updated
        }
        fields {
          slug
        }
      }
    }
  }
`

export default BlogList
