import Axios from "@/services/infrastructure/Axios";
import {TaskCreateDto} from "@/dto";
import {Task} from "@/models/entites/Tasks";

export class TaskService {
    static serviceUrl = '/task'

    static async getAll(): Promise<Task[]> {
        const {data} = await Axios.get(this.serviceUrl);
        return data
    }

    static async create(dto: TaskCreateDto): Promise<Task> {
        const {data} = await Axios.post(this.serviceUrl, dto);
        return data;
    }

    static async remove(id: number) {
        return await Axios.delete(this.serviceUrl + `/${id}`)
    }
}
