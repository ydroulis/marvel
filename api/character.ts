import md5 from 'md5';
import axios from 'axios'

const baseURL = 'http://gateway.marvel.com/v1/public/';

const publicKey = 'b076a24991bdc2b2840977bbe989220d';
const privateKey = '1d89de20b654dd5da7cdd54dd3922305860c50aa';

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

export const getCharacters = async (offset?: number, limit?: number) => {
    try {
        const response = await axios.get(`${baseURL}characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${10}&offset=${10}`);

        if (!response) {
            throw new Error("Erro ao obter dados");
        }
        return await response.data.data;
    } catch (error) {
        console.error(error);
    }

}