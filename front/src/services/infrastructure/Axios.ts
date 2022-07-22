import axios from "axios";
import ApiHelper from "@/services/infrastructure/ApiHelper";

const Axios = axios.create({
    baseURL: ApiHelper.apiUrl,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

Axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        console.log('unauthorized')
    } else {
        return Promise.reject(error);
    }
});

export default Axios;
