export interface ICharacter {
    name: string;
    id: number;
    comics: {
        available: number
    },
    events: {
        available: number
    },
    description: string,
    thumbnail: {
        path: string;
        extension: string
    }
}