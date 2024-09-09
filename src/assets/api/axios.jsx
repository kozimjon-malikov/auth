import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5173', // Set base URL for the API
});


export default instance;
