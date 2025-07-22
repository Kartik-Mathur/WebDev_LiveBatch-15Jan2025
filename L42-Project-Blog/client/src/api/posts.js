import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:4444/api/posts',
    withCredentials: true,
});


export const fetchPosts = () => api.get('/');
export const createPost = (post) => api.post('/', post);
export const fetchPost = id => api.get(`/${id}`);