import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://db9e-154-126-100-31.eu.ngrok.io'
});

export default httpClient;
