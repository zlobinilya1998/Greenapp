import Axios from "@/services/infrastructure/Axios";

export class DashboardService {
    static async getTasks(){
        const { data } = await Axios.get('/tasks');
        return data
    }
    static async addTask(){
        const { data } = await Axios.post('/tasks');
        return data;
    }
}
