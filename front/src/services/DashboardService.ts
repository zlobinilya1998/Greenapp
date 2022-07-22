import Axios from "@/services/infrastructure/Axios";
import {Dashboard} from "@/models/entites/Dashboard";

export class DashboardService {
    static async getDashboard(){
        const { data } = await Axios.get('/dashboard');
        return data as Dashboard;
    }
    static async getInfo(){
        const { data } = await Axios.get('/info');
        return data;
    }
    static async addInfo(payload: {title: string,value: number}){
        return await Axios.post('/info',payload);
    }
    static async getTasks(){
        const { data } = await Axios.get('/tasks');
        return data
    }
    static async addTask(){
        const { data } = await Axios.post('/tasks');
        return data;
    }
}
