export default class ApiHelper {
    static baseUrl = process.env.VUE_APP_BASE_URL;
    static apiUrl = this.baseUrl + '/api'
}

