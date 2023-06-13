import Head from 'next/head'
import Header from '@/components/Header'
import MainView from '@/components/MainView'
import GlobalStyle from '../styles/global';


export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Marvel App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <MainView />
    </>
  )
}
