import { } from 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            switch: string;

            text: string
        }

    }
}