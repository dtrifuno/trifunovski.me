import type { Config } from 'tailwindcss'

interface Theme {
  theme: (arg0: string) => string
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: ({ theme }: Theme) => ({
        nord: {
          css: {
            '--tw-prose-body': theme('colors.nord-0'),
            '--tw-prose-headings': theme('colors.nord-1'),
            '--tw-prose-lead': theme('colors.nord-10'),
            '--tw-prose-links': theme('colors.nord-10'),
            '--tw-prose-bold': theme('colors.nord-2'),
            '--tw-prose-counters': theme('colors.nord-10'),
            '--tw-prose-bullets': theme('colors.nord-10'),
            '--tw-prose-hr': theme('colors.nord-10'),
            '--tw-prose-quotes': theme('colors.nord-3'),
            '--tw-prose-quote-borders': theme('colors.nord-10'),
            '--tw-prose-captions': theme('colors.nord-3'),
            '--tw-prose-code': theme('colors.nord-0'),
            '--tw-prose-pre-code': theme('colors.nord-0'),
            '--tw-prose-pre-bg': theme('colors.nord-5'),
            '--tw-prose-th-borders': theme('colors.nord-10'),
            '--tw-prose-td-borders': theme('colors.nord-10'),
            '--tw-prose-invert-body': theme('colors.nord-6'),
            '--tw-prose-invert-headings': theme('colors.nord-5'),
            '--tw-prose-invert-lead': theme('colors.nord-9'),
            '--tw-prose-invert-links': theme('colors.nord-9'),
            '--tw-prose-invert-bold': theme('colors.nord-4'),
            '--tw-prose-invert-counters': theme('colors.nord-8'),
            '--tw-prose-invert-bullets': theme('colors.nord-9'),
            '--tw-prose-invert-hr': theme('colors.nord-9'),
            '--tw-prose-invert-quotes': theme('colors.nord-4'),
            '--tw-prose-invert-quote-borders': theme('colors.nord-9'),
            '--tw-prose-invert-captions': theme('colors.nord-4'),
            '--tw-prose-invert-code': theme('colors.nord-6'),
            '--tw-prose-invert-pre-code': theme('colors.nord-6'),
            '--tw-prose-invert-pre-bg': theme('colors.nord-0'),
            '--tw-prose-invert-th-borders': theme('colors.nord-8'),
            '--tw-prose-invert-td-borders': theme('colors.nord-8'),
          },
        },
      }),
      colors: {
        'very-black': '#242933',
        'nord-0': '#2E3440',
        'nord-1': '#3B4252',
        'nord-2': '#434C5E',
        'nord-3': '#4C566A',
        'nord-4': '#D8DEE9',
        'nord-5': '#E5E9F0',
        'nord-6': '#ECEFF4',
        'nord-7': '#8FBCBB',
        'nord-8': '#88C0D0',
        'nord-9': '#81B3DA', // increased contrast
        'nord-10': '#416FA0', // increased contrast
        'nord-11': '#BF616A',
        'nord-12': '#D08770',
        'nord-13': '#EBCB8B',
        'nord-14': '#A3BE8C',
        'nord-15': '#B48EAD',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
