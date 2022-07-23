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
            const newTask = await TaskService.create(dto);
            this.tasks.push(newTask)
        },
        async removeTask(id: number) {
            await TaskService.remove(id);
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
    },
})
