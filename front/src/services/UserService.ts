import Axios from "@/services/infrastructure/Axios";

export class UserService {
    static serviceUrl = '/user'
    static async getUserDetails(){
        const { data } = await Axios.get(this.serviceUrl + '/details');
        return data;
    }
}
