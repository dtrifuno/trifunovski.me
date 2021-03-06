import React from 'react'
import { graphql } from 'gatsby'
import clsx from 'clsx'

import { MDXProvider, MDXProviderComponents } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/Layout'
import BlogTitle from '../components/BlogTitle'
import SmartLink from '../components/SmartLink'
import Sidebar from '../components/Sidebar'
import SEO from '../components/SEO'
import SyntaxHighlighter from '../components/SyntaxHighlighter'
import Bibliography from '../components/bibliography/Bibliography'
import Cite from '../components/bibliography/Cite'

import { processBibliography } from '../components/bibliography/dmtalpha'

import { BlogPostQuery, BibtexEntry } from '../types'

const components: MDXProviderComponents = {
  h1: ({ children, className, ...props }) => (
    <h1 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, className, ...props }) => (
    <h5 className={clsx('hide-svg', className)} {...props}>
      {children}
    </h5>
  ),
  a: ({ children, href, ...props }) => (
    <SmartLink href={href} {...props}>
      {children}
    </SmartLink>
  ),
  code: props => <SyntaxHighlighter {...props} />,
}

interface Props {
  data: BlogPostQuery
  pageContext: {
    id: string
    bibliography: BibtexEntry[]
  }
}

const BlogPost: React.FC<Props> = ({ data, pageContext }) => {
  const { tableOfContents, body, frontmatter } = data.mdx!
  const { title, subtitle } = frontmatter
  const { bibliography } = pageContext

  const bibliographyData = processBibliography(bibliography)
  const cite = ({ citationKey }: { citationKey: string }) => (
    <Cite citationKey={citationKey} bibliographyData={bibliographyData} />
  )

  return (
    <Layout>
      <SEO title={title} description={subtitle} article />
      <div className={clsx('flex flex-row justify-center max-w-full')}>
        <div className={clsx('max-w-5xl flex flex-row')}>
          <div
            className={clsx(
              'py-6',
              'sm:pr-4 md:pr-6',
              'sm:w-2/3 md:w-3/4 lg:w-4/5'
            )}
          >
            <BlogTitle className={clsx('mb-8')} frontmatter={frontmatter} />
            <div
              className={clsx('prose prose-primary md:prose-lg', 'max-w-none')}
            >
              <MDXProvider components={{ ...components, cite }}>
                <MDXRenderer>{body}</MDXRenderer>
                <Bibliography bibliographyData={bibliographyData} />
              </MDXProvider>
            </div>
          </div>
          <Sidebar
            className={clsx(
              'h-screen sticky top-0',
              'hidden sm:block',
              'w-1/3 md:w-1/4 lg:w-1/5'
            )}
            tableOfContents={tableOfContents}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      tableOfContents {
        items {
          title
          url
          items {
            title
            url
          }
        }
      }
      frontmatter {
        title
        subtitle
        date
        tags
        last_updated
      }
    }
  }
`

export default BlogPost
