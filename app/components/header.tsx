'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

interface Props {
  links?: { title: string; to: string }[]
}

const Header = ({ links = [] }: Props): React.ReactElement => {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <header className="mb-1 px-3">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-center justify-between sm:h-14">
          <h1 className="text-2xl py-2 text-nord-4 font-semibold">
            Darko Trifunovski
          </h1>
          <div
            className={clsx(
              'flex-1 flex items-stretch justify-end',
              'sm:items-stretch sm:justify-end',
            )}
          >
            <div className="flex-shrink-0 flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className={clsx(
                  'sm:hidden',
                  'text-white bg-nord-0 hover:bg-nord-1 font-medium rounded-lg text-sm mt-1.5 px-2.5 py-2.5 text-center inline-flex items-center',
                  'focus:ring-4 focus:outline-none focus:ring-nord-10',
                )}
                type="button"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  ></path>
                </svg>
              </button>

              <div
                className={clsx(
                  !open && 'hidden',
                  'absolute top-14 z-10 sm:hidden rounded shadow w-32 right-0 bg-nord-0 dark:bg-nord-1',
                )}
              >
                <ul className="py-2 text-sm text-nord-6">
                  {links.map((link) => (
                    <li key={link.title + link.to}>
                      <Link
                        className="block px-4 py-2 font-medium lowercase no-underline text-lg hover:bg-nord-2"
                        onClick={() => setOpen(false)}
                        href={link.to}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <nav className="hidden sm:block sm:ml-6">
                <ul className="list-none flex space-x-4">
                  {links.map((link) => (
                    <li key={link.title + link.to}>
                      <Link
                        className={clsx(
                          'px-2 py-1 font-medium text-xl text-nord-6',
                          'text-gray-600 lowercase hover:text-nord-4 no-underline',
                          pathname === link.to
                            ? 'text-nord-6 border-b-2 border-nord-6 hover:border-nord-4'
                            : '',
                        )}
                        href={link.to}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
