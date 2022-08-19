import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-jwt-sample.herokuapp.com'
    // baseURL: 'http://localhost:8080'
});

// const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY2MDk1MjYxNSwiaWF0IjoxNjYwOTM0NjE1fQ.MLGmu4KGPj0NmwiN536nkT2aGLAca4JEjuMfBGAfe9FsXrp2EBVKMUwVTCXKfTRWaTIxrgtt38s-OYqgbhleFQ";

// api.defaults.headers.Authorization = `Bearer ${token}`;