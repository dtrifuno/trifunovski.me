import React from 'react'

import Date from './date'

interface Props {
  date: Date
  title: string
  contentHtml: string
  description?: string
}

const PostLayout = ({
  date,
  title,
  contentHtml,
  description,
}: Props): React.ReactElement => {
  return (
    <article>
      <div className="uppercase font-bold text-nord-10 dark:text-nord-9 my-0">
        <Date date={date} />
      </div>
      <h1 className="text-4xl">{title}</h1>
      {description ? <p className="lead">{description}</p> : ''}

      <div
        className="overflow-hidden"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  )
}

export default PostLayout
