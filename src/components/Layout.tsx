import React from 'react'
import clsx from 'clsx'

import Footer from './Footer/'
import Header from './Header/'

const { footer: footerUrls } = require('../../config.js')

import '../scss/index.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={clsx('flex', 'flex-col', 'h-screen', 'justify-between')}>
      <Header
        className={clsx('border-b-2', 'border-primary-500')}
        links={[
          { title: 'About', to: '/' },
          { title: 'Projects', to: '/projects' },
          { title: 'Posts', to: '/posts' },
        ]}
      />
      <main className={clsx('mb-auto')}>
        <div className={clsx('px-6')}>{children}</div>
      </main>
      <Footer
        className={clsx('border-t-2', 'border-primary-500')}
        footerUrls={footerUrls}
      />
    </div>
  )
}

export default Layout
