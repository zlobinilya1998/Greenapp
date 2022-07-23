import {defineStore} from 'pinia'
import {TUser} from "@/models/entites/User";
import {AuthService} from "@/services/AuthService";
import {UserService} from "@/services/UserService";
import {LoginDto, RegisterDto} from "@/dto";

export const useAppStore = defineStore('appstore', {
    state: () => ({
        user: null as TUser | null,
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
        }
    },
    getters: {
        isLoggedIn(): TUser | null {
            return this.user
        }
    },
})

