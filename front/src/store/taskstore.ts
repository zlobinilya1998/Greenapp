import {defineStore} from "pinia";
import {TaskService} from "@/services/TaskService";
import {TaskCreateDto} from "@/dto";
import {Task} from "@/models/entites/Tasks";

export const useTaskStore = defineStore('taskstore', {
    state: () => ({
        tasks: null as Task[] | null,
    }),
    actions: {
        async getTasks(){
            this.tasks = await TaskService.getAll();
            return this.tasks;
        },
        async createTask(dto: TaskCreateDto){
            return await TaskService.create(dto);
        }
    },
})
