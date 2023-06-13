import { Dispatch, SetStateAction, createContext } from "react";
import { DefaultTheme } from "styled-components/dist/types";

interface ThemeHandlerContextProps {
    setTheme: Dispatch<SetStateAction<DefaultTheme>>
    theme: DefaultTheme,
}

const ThemeHandlerContext = createContext<ThemeHandlerContextProps>({
    theme: {
        title: '',

        colors: {
            primary: '',
            secondary: '',

            icons: '',
            active: '',

            text: ''
        }
    },
    setTheme: () => { }
});

export default ThemeHandlerContext;