export interface IComic {
    title: string,
    id: number,
    dates: { type: string, date: string }[],
    thumbnail: {
        path: string,
        extension: string
    }
}