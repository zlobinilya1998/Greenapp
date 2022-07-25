export default class ApiHelper {
    static baseUrl = process.env.VUE_APP_BACKEND;
    static apiUrl = this.baseUrl + '/api'
}

console.log(ApiHelper.baseUrl, process.env)
