import axios from "axios";

import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDk5N2VjMDk5OWEzNDY5N2IxNWU2ZTFkY2QwMWE0ZSIsInN1YiI6IjYzZWY4ZGJkMzU4MThmMDBiYzBkYmU1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xN-ny3OOU3SR2gRkmXraxeVLVX4rvW_e01T6lvSJRhA'
    return config
})

export default axiosService