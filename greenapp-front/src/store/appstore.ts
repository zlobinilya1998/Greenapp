import { defineStore } from 'pinia'
import {DashboardService} from "@/services/DashboardService";
import {Dashboard} from "@/models/entites/Dashboard";

export const useAppStore = defineStore('appstore', {
    state: () => ({
        dashboard: null as Dashboard | null,
    }),
    actions: {
       async getDashboard(){
           const res = await DashboardService.getDashboard();
           this.dashboard = res;
           return this.dashboard;
       }
    },
})

