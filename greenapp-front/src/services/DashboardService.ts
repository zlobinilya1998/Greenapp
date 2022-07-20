import Axios from "@/services/infrastructure/Axios";
import {Dashboard} from "@/models/entites/Dashboard";

export class DashboardService {
    static async getDashboard(){
        const { data } = await Axios.get('/dashboard');
        return data as Dashboard;
    }
}
