import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, Global, css } from '@emotion/react'
import { theme } from './styles/theme'
import App from './App'

// Font imports
import PPMoriRegular from './assets/fonts/PPMori-Regular.otf'
import PPMoriRegularItalic from './assets/fonts/PPMori-RegularItalic.otf'
import PPMoriSemiBold from './assets/fonts/PPMori-SemiBold.otf'
import PPMoriSemiBoldItalic from './assets/fonts/PPMori-SemiBoldItalic.otf'
import PPMoriExtralight from './assets/fonts/PPMori-Extralight.otf'
import PPMoriExtralightItalic from './assets/fonts/PPMori-ExtralightItalic.otf'

const globalStyles = css`
  @font-face {
    font-family: 'PP Mori';
    src: url(${PPMoriRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PP Mori';
    src: url(${PPMoriRegularItalic}) format('opentype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'PP Mori';
    src: url(${PPMoriSemiBold}) format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'PP Mori';
    src: url(${PPMoriSemiBoldItalic}) format('opentype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'PP Mori';
    src: url(${PPMoriExtralight}) format('opentype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'PP Mori';
    src: url(${PPMoriExtralightItalic}) format('opentype');
    font-weight: 200;
    font-style: italic;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PP Mori', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${theme.colors.secondary};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary};
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
