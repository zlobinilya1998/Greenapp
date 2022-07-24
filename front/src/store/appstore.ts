import {defineStore} from 'pinia'
import {TUser} from "@/models/entites/User";
import {AuthService} from "@/services/AuthService";
import {UserService} from "@/services/UserService";
import {LoginDto, RegisterDto} from "@/dto";
import {Locales, LocalizationKey} from "@/localization";

export const useAppStore = defineStore('appstore', {
    state: () => ({
        user: null as TUser | null,
        locale: Locales.Ru as LocalizationKey,
        tasks: null as [] | null,
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
            this.locale = this.user.locale;
        },
        async changeLocale(locale: LocalizationKey){
            return UserService.changeLocale(locale);
        },
        logout() {
            this.user = null;
            AuthService.logout();
        },
    },
    getters: {
        isLoggedIn(): TUser | null {
            return this.user;
        }
    },
})

