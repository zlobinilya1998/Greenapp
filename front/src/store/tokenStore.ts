import {defineStore} from "pinia";
import {Token} from "@/models/entites/Token";
import {TokenService} from "@/services/TokenService";
import {TokenCreateDto} from "@/dto";

interface State {
    tokens: Token[]
}


export const useTokenStore = defineStore('token', {
    state: (): State => ({
        tokens: [],
    }),
    actions: {
        async getTokens() {
            this.tokens = await TokenService
                .getAll()
                .then(tokens => tokens.map(token => ({
                    ...token,
                    timeToUnlock: new Date(token.timeToUnlock).toLocaleDateString('ru-Ru', {
                        hour: 'numeric',
                        minute: 'numeric',
                    })
                })));
            return this.tokens;
        },
        async createToken(dto: TokenCreateDto) {
            const newTask = await TokenService.create(dto);
            this.tokens.push(newTask)
        },
        async removeToken(id: number) {
            await TokenService.remove(id);
            this.tokens = this.tokens.filter(token => token.id !== id);
        }
    },
    getters: {}
})
