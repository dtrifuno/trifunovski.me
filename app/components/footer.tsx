import * as React from 'react'

const Footer = (): React.ReactElement => {
  return (
    <footer className="text-center text-sm sm:text-base">
      <div className="text-center text-nord-5 p-4">
        Darko Trifunovski © 2023. Built with Next.js&mdash;source code
        available on{' '}
        <a
          className="font-medium underline text-nord-9"
          href="https://github.com/dtrifuno/trifunovski.me"
        >
          Github
        </a>
        .
      </div>
    </footer>
  )
}

export default Footer
