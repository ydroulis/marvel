import light from '@/styles/theme/light';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components';
import ThemeHandlerContext from '../context/ThemeHandlerContext';
import { DefaultTheme } from 'styled-components/dist/types';
import CharacterContext from '@/context/CharacterContext';
import { ICharacter } from '@/types/Character';

const queryClient = new QueryClient();


export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);
  const [character, setCharacter] = useState<ICharacter>({
    name: '',
    description: '',
    id: 0,
    comics: {
      available: 0
    },
    events: {
      available: 0
    },
    thumbnail: {
      extension: '',
      path: ''
    }
  });

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      <ThemeHandlerContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </ThemeProvider>
      </ThemeHandlerContext.Provider>
    </CharacterContext.Provider>
  )
}
