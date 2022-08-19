import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-jwt-sample.herokuapp.com'
    // baseURL: 'http://localhost:8080'
});