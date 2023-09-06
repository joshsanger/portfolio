import type {Config} from 'tailwindcss';

import {
  animation,
  backgroundImages,
  borderRadius,
  boxShadow,
  colors,
  fontFamily,
  fontSize,
  keyframes,
  maxWidth,
  minWidth,
  minHeight,
  screens,
  spacing,
} from '~/styles/tailwindOverrides';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation,
      backgroundImages,
      borderRadius,
      boxShadow,
      colors,
      fontFamily,
      fontSize,
      keyframes,
      maxWidth,
      minWidth,
      minHeight,
      screens,
      spacing,
    },
  },
  plugins: [],
} satisfies Config;
