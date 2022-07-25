import axios from "axios";
import ApiHelper from "@/services/infrastructure/ApiHelper";


export const authToken = 'usrtoken';

const Axios = axios.create({
    baseURL: ApiHelper.apiUrl,
    timeout: 1000,
});


Axios.interceptors.request.use(function (request) {
    const token = localStorage.getItem(authToken);
    if (token) request.headers!['Authorization'] = `Bearer ${token}`
    return request;
}, function (error) {
    return Promise.reject(error);
});
Axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        console.log('Token invalid, clearing from localstorage')
        localStorage.removeItem(authToken)
    }
    return Promise.reject(error);
});

export default Axios;
