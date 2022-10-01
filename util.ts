import axios from "axios"

export function getDataFromURL<T = any>(url: string) {
    return axios.get(url).then(res => res.data as T);
}