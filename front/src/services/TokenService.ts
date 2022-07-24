import Axios from "@/services/infrastructure/Axios";
import {TokenCreateDto} from "@/dto";
import {Token} from "@/models/entites/Token";

export class TokenService {
    static serviceUrl = '/token'

    static async getAll(): Promise<Token[]> {
        const {data} = await Axios.get(this.serviceUrl);
        return data
    }

    static async create(dto: TokenCreateDto): Promise<Token> {
        const {data} = await Axios.post(this.serviceUrl, dto);
        return data;
    }

    static async remove(id: number) {
        return await Axios.delete(this.serviceUrl + `/${id}`)
    }
}
