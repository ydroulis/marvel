import { useState } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import light from '@/styles/theme/light'
import dark from '@/styles/theme/dark'
import MainView from '@/components/MainView'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global';


export default function Home() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>Marvel App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header toggleTheme={toggleTheme} />
      <MainView />
    </ThemeProvider>
  )
}
