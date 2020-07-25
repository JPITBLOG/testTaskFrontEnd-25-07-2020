import axios from 'axios';
export const baseUrl = 'http://localhost:3006';
const baseService = axios.create({
    baseURL:baseUrl
});
export default baseService;