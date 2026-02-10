export type EnvConfigInterface = {
    APP_URL: string
}

export const envConfig: EnvConfigInterface = {
    APP_URL: import.meta.env.API_URL
}