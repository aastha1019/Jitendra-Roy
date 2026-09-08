import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#064E3B',
          dark: '#022C22',
          light: '#0F766E',
        },

        gold: {
          DEFAULT: '#C59B27',
          light: '#FEF9C3',
          soft: '#FFFBEB',
        },

        surface: {
          DEFAULT: '#F9F9FF',
          white: '#FFFFFF',
          soft: '#F4F6F4',
          muted: '#ECFDF5',
        },

        ink: {
          DEFAULT: '#111827',
          secondary: '#4B5563',
          muted: '#6B7280',
          light: '#9CA3AF',
        },
      },

      maxWidth: {
        site: '1240px',
      },

      spacing: {
        'space-2xs': '0.25rem',
        'space-xs': '0.5rem',
        'space-sm': '0.75rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2rem',
        'space-2xl': '3rem',
        'space-3xl': '4.5rem',
        'space-4xl': '6rem',

        'gutter-mobile': '1rem',
        'gutter-tablet': '1.25rem',
        'gutter-desktop': '1.5rem',
      },

      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
      },

      fontFamily: {
        sans: [
          'var(--font-plus-jakarta-sans)',
          'Plus Jakarta Sans',
          'sans-serif',
        ],

        headline: [
          'var(--font-plus-jakarta-sans)',
          'Plus Jakarta Sans',
          'sans-serif',
        ],

        body: [
          'var(--font-plus-jakarta-sans)',
          'Plus Jakarta Sans',
          'sans-serif',
        ],
      },

      fontSize: {
        'display-hero': [
          '56px',
          {
            lineHeight: '64px',
            letterSpacing: '-0.025em',
            fontWeight: '800',
          },
        ],

        'display-hero-mobile': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '-0.02em',
            fontWeight: '800',
          },
        ],

        'headline-xl': [
          '40px',
          {
            lineHeight: '48px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
          },
        ],

        'headline-lg': [
          '30px',
          {
            lineHeight: '38px',
            letterSpacing: '-0.015em',
            fontWeight: '700',
          },
        ],

        'headline-md': [
          '22px',
          {
            lineHeight: '30px',
            letterSpacing: '-0.01em',
            fontWeight: '600',
          },
        ],

        'headline-sm': [
          '18px',
          {
            lineHeight: '26px',
            letterSpacing: '-0.005em',
            fontWeight: '600',
          },
        ],

        'body-lg': [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '400',
          },
        ],

        'body-md': [
          '15px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],

        'body-sm': [
          '13px',
          {
            lineHeight: '20px',
            letterSpacing: '0.005em',
            fontWeight: '400',
          },
        ],

        'label-caps': [
          '11px',
          {
            lineHeight: '16px',
            letterSpacing: '0.08em',
            fontWeight: '700',
          },
        ],

        'label-badge': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.01em',
            fontWeight: '600',
          },
        ],

        'metric-price': [
          '24px',
          {
            lineHeight: '30px',
            letterSpacing: '-0.02em',
            fontWeight: '800',
          },
        ],
      },

      boxShadow: {
        'level-1':
          '0 4px 20px -2px rgba(17, 24, 39, 0.05), 0 2px 6px -1px rgba(17, 24, 39, 0.02)',

        'level-2':
          '0 12px 32px -4px rgba(6, 78, 59, 0.08), 0 4px 12px -2px rgba(17, 24, 39, 0.04)',

        'level-3':
          '0 24px 48px -12px rgba(2, 44, 34, 0.18)',
      },
    },
  },

  plugins: [],
};

export default config;