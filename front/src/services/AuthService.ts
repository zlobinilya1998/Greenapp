import Axios, {authToken} from "@/services/infrastructure/Axios";
import {LoginDto, RegisterDto} from "@/dto";
import {UserService} from "@/services/UserService";

export class AuthService {
    static serviceUrl = '/auth'

    static async login(form: LoginDto) {
        const {data} = await Axios.post(this.serviceUrl + '/login', form);
        localStorage.setItem(authToken, data.token)
        return data
    }

    static async register(form: RegisterDto) {
        const {data} = await Axios.post(this.serviceUrl + '/register', form);
        localStorage.setItem(authToken, data.token)
        return data
    }

    static async checkToken() {
        try {
            await UserService.getUserDetails();
            return true;
        } catch (e) {
            return false
        }
    }
}
