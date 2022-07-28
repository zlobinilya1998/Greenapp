import {defineStore} from 'pinia'
import {TUser} from "@/models/entites/User";
import {AuthService} from "@/services/AuthService";
import {UserService} from "@/services/UserService";
import {LoginDto, RegisterDto} from "@/dto";
import {Locales, LocalizationKey} from "@/localization";

interface State {
    user: TUser | null,
    locale: LocalizationKey | any,
}

export const useAppStore = defineStore('app', {
    state: (): State => ({
        user: null,
        locale: localStorage.getItem('locale') || Locales.Ru,
    }),
    actions: {
        async login(form: LoginDto) {
            await AuthService.login(form);
            await this.getUserDetails();
        },
        async register(form: RegisterDto) {
            await AuthService.register(form);
        },
        async getUserDetails() {
            this.user = await UserService.getUserDetails();
        },
        logout() {
            this.user = null;
            AuthService.logout();
        },
    },
    getters: {
        isLoggedIn: state => state.user,
    },
})

