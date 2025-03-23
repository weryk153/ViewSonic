export const theme = {
  colors: {
    blue: '#3992ff',
    gray: '#ccc',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
} as const

export type AppTheme = typeof theme
