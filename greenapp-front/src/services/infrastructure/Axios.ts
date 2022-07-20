import axios from "axios";
import ApiHelper from "@/services/infrastructure/ApiHelper";

const Axios = axios.create({
    baseURL: ApiHelper.baseUrl,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default Axios;
