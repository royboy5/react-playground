import axios from 'axios';

const API_SERVER = {
    LOCAL: {
        BASE_URL: 'http://localhost:3000',
        API_CLIENT_KEY: 'API_KEY'
    }
};

const API_SERVER_SELECTED = 'LOCAL';

console.info( 'Axios using baseUrl', API_SERVER[API_SERVER_SELECTED].BASE_URL);

const host = API_SERVER[API_SERVER_SELECTED].BASE_URL;

export const createAxiosInstance = () => axios.create({
    baseURL: host,
    timeout: 1000
});
