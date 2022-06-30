import { Theme } from '../types'

const themes: Record<string, Theme> = {
  base: {
    fontFamily: '"Segoe UI", Ubuntu, sans-serif',
    colorText: '#e4e2e2',
    bgColorMain: '#171a1c',
    bgColorTitle: '#1f292e'
  },
  light: {
    fontFamily: '"Segoe UI", Ubuntu, sans-serif',
    colorText: '#171717',
    bgColorMain: '#fffefe',
    bgColorTitle: '#f5f5f5'
  }
}

export default themes
