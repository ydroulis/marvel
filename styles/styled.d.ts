import { } from 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;

            icons: string;
            active: string;

            text: string
        }

    }
}