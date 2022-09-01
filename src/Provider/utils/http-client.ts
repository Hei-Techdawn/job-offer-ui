import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'https://3c82-154-126-100-31.eu.ngrok.io'
});

export default httpClient;
