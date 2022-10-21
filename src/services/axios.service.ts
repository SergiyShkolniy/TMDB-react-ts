import axios, {AxiosResponse} from "axios";

import {apiKey, baseURL} from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosService = axios.create({baseURL, params:{api_key: apiKey}});

export {
    axiosService
}