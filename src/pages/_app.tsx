import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

import GlobalStyle from '../pages/styles/global'
import theme from './styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
