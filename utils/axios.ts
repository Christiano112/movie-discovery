import Axios, { AxiosRequestConfig, AxiosError } from "axios";
const TOKEN = process.env.NEXT_PUBLIC_TOKEN as string;

interface ResponseType {
    detail: string;
    email: string;
    code: string;
    messages: Record<string, string>[];
}

const axios = Axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
    },
});

const axiosConfigurator = (config: AxiosRequestConfig) => {
    if (TOKEN) {
        config.headers = {
            ...(config.headers ?? {}),
            Authorization: `Bearer ${TOKEN}`,
        };
    }
    return config;
};

axios.interceptors.request.use(axiosConfigurator as never);

axios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError<ResponseType>) => {
        if (error.code === "ERR_NETWORK") {
            return Promise.reject(new Error("You are not connected to the internet."));
        }
        if (error.response?.data?.detail) {
            console.error(error.response.data.detail);
            return null;
        } else {
            console.error(error.message);
            return null;
        }
    },
);

export default axios;