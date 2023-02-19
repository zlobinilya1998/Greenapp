import Axios from "@/services/infrastructure/Axios";
import {TUser} from "@/models/entites/User";

export class UserService {
    static serviceUrl = '/user'
    static async getUserDetails(){
        const { data } = await Axios.get(this.serviceUrl + '/details');
        return data as TUser;
    }

    static async getAll(){
        const { data } = await Axios.get(this.serviceUrl);
        return data as TUser[];
    }
}
