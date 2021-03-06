import clsx from 'clsx'
import { Link } from 'gatsby'
import React from 'react'
import { PageContext } from '../types'

interface PaginatorProps {
  className?: string
  url: string
  pageContext: PageContext
}

const Paginator: React.FC<PaginatorProps> = ({
  pageContext,
  url,
  className,
}) => {
  const { currentPage, numPages } = pageContext

  let nextLink = undefined
  if (currentPage < numPages) {
    nextLink = `${url}/${currentPage + 1}`
  }

  let prevLink = undefined
  if (currentPage === 2) {
    prevLink = `${url}`
  } else if (currentPage > 2) {
    prevLink = `${url}/${currentPage - 1}`
  }

  return (
    <div
      className={clsx(
        'text-xl',
        'flex',
        'justify-between',
        'items-center',
        className
      )}
    >
      {prevLink ? (
        <Link
          className={clsx('text-primary-500', 'hover:underline')}
          to={prevLink}
        >
          « Newer
        </Link>
      ) : (
        <span>« Newer</span>
      )}
      {` - ${currentPage} - `}
      {nextLink ? (
        <Link
          className={clsx('text-primary-500', 'hover:underline')}
          to={nextLink}
        >
          Older »
        </Link>
      ) : (
        <span>Older »</span>
      )}
    </div>
  )
}

export default Paginator
