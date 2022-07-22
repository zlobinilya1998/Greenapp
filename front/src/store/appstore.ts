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
        async getDashboard() {
            const res = await DashboardService.getDashboard();
            this.dashboard = res;
            return this.dashboard;
        },
        async getInfo() {
            this.info = await DashboardService.getInfo();
            return this.info;
        },
        async addInfo(payload: { title: string, value: number }) {
            return await DashboardService.addInfo(payload);
        },
        async getTasks() {
            this.tasks = await DashboardService.getTasks();
            return this.tasks;
        },
        async addTask() {
            return DashboardService.addTask();
        },
    },
})

