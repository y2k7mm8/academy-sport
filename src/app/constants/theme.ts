/**
 * Theme Constants
 * National colors and design tokens for the Kyrgyz Republic sports platform
 */

export const NATIONAL_COLORS = {
  red: '#E31837',    // Primary national color - Kyrgyz red
  yellow: '#FFCD00', // Secondary national color - Kyrgyz yellow
} as const;

export const NEUTRAL_COLORS = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

export const MAX_WIDTH = '1440px';

export const SPACING = {
  section: 'py-24 md:py-32',
  container: 'max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12',
} as const;

export const ANIMATIONS = {
  fadeIn: 'transition-opacity duration-700',
  slideUp: 'transition-transform duration-500',
  hoverScale: 'transition-transform duration-300 hover:scale-105',
  colorTransition: 'transition-colors duration-300',
} as const;
