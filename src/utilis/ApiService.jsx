import axios from "axios";

// const baseUrl = 
const AxiosService = axios.create({
    // baseURL: `${import.meta.env.VITE_API_URL}`,
    baseURL: `${import.meta.env.VITE_API_URL}` || 'http://localhost:8000',
    headers: {
        'Content-Type' : "application/json",
    }
})
console.log('Axios Base URL:', AxiosService.defaults.baseURL);

console.log(AxiosService.defaults.baseURL + '/user/signup');


AxiosService.interceptors.request.use(config => {
    const token =  sessionStorage.getItem('token')
    if(token)
        config.headers.Authorization = `Bearer ${token}`
    return config
})

export default AxiosService