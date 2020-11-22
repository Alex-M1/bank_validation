import * as axios from 'axios'

const instance = axios.create({
    headers: {
        "Accept-Version": "3",
        "Access-Control-Allow-Origin": "https://lookup.binlist.net/",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "1800",
        "Access-Control-Allow-Headers": "content-type",
        "Access-Control-Allow-Methods": "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    },
    baseURL: 'https://lookup.binlist.net/'
})
export const bankAPI = {
    getCardData(BIN) {
        return instance.get(BIN)
    }
}