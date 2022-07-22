import Axios from "@/services/infrastructure/Axios";

export class AuthService {
    static serviceUrl = '/auth'
    static async login(){
        const res = await Axios.post(this.serviceUrl + '/login',{
            email: 123,
            password: "qwertin1998"
        });
    }
}
