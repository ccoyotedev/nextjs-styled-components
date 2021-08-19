import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/globalStyles'
import GlobalProvider from "context/GlobalContext"
import Reset from 'theme/reset'
import { theme } from 'theme'

const App = ({ Component, pageProps }) => {
  return (
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <Reset />
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalProvider>
  );
}

export default App;