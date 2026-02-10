export type EnvConfigInterface = {
    VITE_API_URL: string
}

export const envConfig: EnvConfigInterface = {
    VITE_API_URL: import.meta.env.VITE_API_URL
}