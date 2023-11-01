import clsx from 'clsx'
import type { Metadata } from 'next'

import Footer from './components/footer'
import Header from './components/header'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://trifunovski.me'),
  title: {
    default: 'Darko Trifunovski',
    template: `%s · Darko Trifunovski`,
  },
  description: "Darko Trifunovski's personal website and blog",
  authors: {
    name: 'Darko Trifunovski',
  },
  openGraph: {
    type: 'website',
    title: 'Darko Trifunovski',
    images: '', // FIXME
    url: '/',
    description: "Darko Trifunovski's personal website and blog",
  },
  twitter: {
    card: 'summary_large_image',
  },
}

// siteUrl: `https://www.trifunovski.me`,

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-y-scroll bg-very-black">
        <div className="flex flex-col justify-between min-h-screen">
          <Header
            links={[
              { title: 'About', to: '/' },
              { title: 'Projects', to: '/projects/' },
              { title: 'Posts', to: '/posts/' },
            ]}
          />

          <main className="mb-auto bg-nord-6 dark:bg-nord-0 grow px-4 py-3 md:py-5">
            <div
              className={clsx(
                'mx-auto max-w-3xl',
                'prose prose-nord dark:prose-invert prose-md md:prose-lg prose-code:before:hidden prose-code:after:hidden',
                'prose-h1:text-3xl prose-h2:text-xl prose-h2:mb-2 prose-h2:mt-5 prose-h3:text-lg prose-h3:mb-2',
                'md:prose-h1:text-4xl md:prose-h2:text-2xl md:prose-h2:mb-3 md:prose-h2:mt-8 md:prose-h3:text-xl md:prose-h3:mb-2',
                'prose-p:mb-4',
              )}
            >
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
