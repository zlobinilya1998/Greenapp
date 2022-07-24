import Axios from "@/services/infrastructure/Axios";
import {TUser} from "@/models/entites/User";
import {LocalizationKey} from "@/localization";

export class UserService {
    static serviceUrl = '/user'
    static async getUserDetails(){
        const { data } = await Axios.get(this.serviceUrl + '/details');
        return data as TUser;
    }

    static async changeLocale(locale: LocalizationKey){
        return await Axios.post(this.serviceUrl + `/localeChange/${locale}`);
    }
}
