import CharacterView from '../components/CharacterView'
import Head from 'next/head'
import Header from '@/components/Header'
import GlobalStyle from '../styles/global';


export default function Character() {

    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Marvel App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <Header />
            <CharacterView />
        </>
    )
}
