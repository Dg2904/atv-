import axios from 'axios';

export const apiRMCharacters = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})