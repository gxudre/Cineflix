import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{ 
    api_key:'f33e9e417a0dec1c9b54b7a288268387',
    language:"pt-BR",
    include_adult: false,
    }
})

