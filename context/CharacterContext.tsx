import { ICharacter } from "@/types/character";
import { Dispatch, SetStateAction, createContext } from "react";


interface CharacterContextProps {
    setCharacter: Dispatch<SetStateAction<ICharacter>>
    character: ICharacter
}

const CharacterContext = createContext<CharacterContextProps>({
    character: {
        name: '',
        id: 0,
        description: '',
        comics: {
            available: 0
        },
        events: {
            available: 0
        },
        thumbnail: {
            path: '',
            extension: ''
        }
    },
    setCharacter: (value: SetStateAction<ICharacter>): void => { }
});

export default CharacterContext;