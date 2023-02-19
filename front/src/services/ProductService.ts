import Axios from "@/services/infrastructure/Axios";

export class ProductService {
    static async getAll(){
        const { data } = await Axios.get('/product');
        return data
    }
    static async addProduct(){
        const { data } = await Axios.post('/product');
        return data;
    }
}
