import React from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  date: Date
  className?: string
  dateFormat?: string
}

const Date = ({
  date,
  className,
  dateFormat = 'MMM d, yyyy',
}: Props): React.ReactElement => {
  return (
    <time className={className} dateTime={format(date, 'yyyy-MM-dd')}>
      {format(date, dateFormat)}
    </time>
  )
}

export default Date
