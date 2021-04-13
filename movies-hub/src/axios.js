import axios from 'axios';

// create base url for api calls
const instance = axios.create(
    {baseURL: "https://api.themoviedb.org/3"},
);

export default instance;