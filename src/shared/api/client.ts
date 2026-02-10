import axios from "axios";
import { envConfig } from "../config";

export const client = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: envConfig.VITE_API_URL
})