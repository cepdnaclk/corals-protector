import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://corals1.herokuapp.com/api/"
})