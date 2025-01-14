import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(100.654deg, #E50101 20%, #1C53F9 80%);',
        'gradient-text': 'linear-gradient(97.176deg, #E90303 29%, #1C53F9 70%);'
      },
      boxShadow: {
        'button-secondary': '-5px 0px 15px rgb(229, 1, 1, 0.8), 5px 0px 15px rgb(21, 68, 208, 1)'
      },
      colors: {
        'primary-50': '#ff5552',
        'primary-100': '#ff2924',
        'primary-200': '#e50101',
        'primary-300': '#c3140f',
        'bg-dark': '#060606',
        'bg-muted': '#0a0909',
        'bg-accent': '#302f32',
        'accent-100': '#1c53f9',
        'accent-200': '#1544d0',
        'accent-300': '#1339ac',
        'text-primary': '#ffffff',
        'text-secondary': '#c6c6c6',
        'text-muted': '#939393',
        'text-inverse': '#1f1f1f',
        'border-default': '#1a1a1a'
      }
    }
  },
  plugins: []
} satisfies Config
