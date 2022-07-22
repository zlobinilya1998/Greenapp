import {defineStore} from 'pinia'
import {DashboardService} from "@/services/DashboardService";
import {Dashboard} from "@/models/entites/Dashboard";

export const useAppStore = defineStore('appstore', {
    state: () => ({
        dashboard: null as Dashboard | null,
        info: null,
        tasks: null as [] | null,
    }),
    actions: {
        async getTasks() {
            this.tasks = await DashboardService.getTasks();
            return this.tasks;
        },
        async addTask() {
            return DashboardService.addTask();
        },
    },
})

