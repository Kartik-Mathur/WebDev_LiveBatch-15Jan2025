import axios from 'axios';

const axiosInterface = axios.create({
    baseURL: 'http://localhost:4444'
});

export default axiosInterface;