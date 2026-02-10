import axios from "axios";
import { envConfig } from "../config";

export const client = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: envConfig.APP_URL
})