// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://imdb188.p.rapidapi.com/api/v1', // Replace with your API base URL
  timeout: 100000,
  headers: {
    'x-rapidapi-key': '4c3c792974mshaf485277d9eb8dbp1379eejsncbb054025214',
    'x-rapidapi-host': 'imdb188.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
});

export default axiosInstance;