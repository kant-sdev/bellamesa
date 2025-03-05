import axios from "axios";

const isProduction = process.env.NODE_ENV === 'production';

export const httpClient = axios.create({
    baseURL: isProduction ? 'https://bellamesa.vercel.app/' : 'http://localhost:3000',
});
