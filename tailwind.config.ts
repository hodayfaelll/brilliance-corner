import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        'surface-raised': '#1A1A1A',
        border: {
          DEFAULT: '#2A2A2A',
          focus: '#C9A84C',
        },
        text: {
          primary: '#F5F0E8',
          secondary: '#9A9690',
          muted: '#5A5755',
        },
        accent: {
          DEFAULT: '#C9A84C',
          hover: '#DEC06A',
          subtle: 'rgba(201, 168, 76, 0.1)',
        },
        success: '#4A9E7F',
        error: '#C0544A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-base': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section-sm': '4rem',
        'section-md': '6rem',
        'section-lg': '8rem',
        'section-xl': '10rem',
      },
      maxWidth: {
        content: '1200px',
        prose: '72ch',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201, 168, 76, 0.3), 0 4px 24px rgba(201, 168, 76, 0.08)',
        'gold-strong': '0 0 0 1px rgba(201, 168, 76, 0.5), 0 8px 32px rgba(201, 168, 76, 0.15)',
        card: '0 1px 3px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#9A9690',
            '--tw-prose-headings': '#F5F0E8',
            '--tw-prose-links': '#C9A84C',
            '--tw-prose-bold': '#F5F0E8',
            '--tw-prose-counters': '#5A5755',
            '--tw-prose-bullets': '#5A5755',
            '--tw-prose-hr': '#2A2A2A',
            '--tw-prose-quotes': '#F5F0E8',
            '--tw-prose-quote-borders': '#C9A84C',
            '--tw-prose-captions': '#5A5755',
            '--tw-prose-code': '#C9A84C',
            '--tw-prose-pre-code': '#F5F0E8',
            '--tw-prose-pre-bg': '#111111',
            '--tw-prose-th-borders': '#2A2A2A',
            '--tw-prose-td-borders': '#2A2A2A',
            maxWidth: 'none',
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid rgba(201, 168, 76, 0.4)',
              transition: 'border-color 0.2s',
              '&:hover': {
                borderColor: '#C9A84C',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-display)',
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
