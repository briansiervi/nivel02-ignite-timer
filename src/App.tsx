import { ThemeProvider, StyleSheetManager } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './components/Router'
import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'
import isPropValid from '@emotion/is-prop-valid'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter basename="/nivel02-ignite-timer">
        <CyclesContextProvider>
          <StyleSheetManager shouldForwardProp={isPropValid}>
            <Router />
          </StyleSheetManager>
        </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
