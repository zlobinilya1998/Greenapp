<template>
    <div class="dashboard">
        <div class="dashboard-header">
            <h3 class="dashboard-user">Hi Username!</h3>
            <div class="dashboard-task-progress">
                <p class="task-progress-title" v-html="`${completedTasks} task completed`"/>
                <div class="task-progress-container">
                    <div :style="{maxWidth: completedTasks}" class="task-progress-bar"/>
                </div>
            </div>
        </div>
        <div class="dashboard-banners">
            <div class="mobile-app-banner">
                <p>R&D for New Banking Mobile App</p>
            </div>
            <div class="sign-up-banner">
                <p>Create Signup Page</p>
            </div>
        </div>
        <monthly-tasks/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import Loader from "@/components/shared/Loader.vue";
import MonthlyTasks from "@/components/MonthlyTasks.vue";

@Component({
    components: {MonthlyTasks, Loader}
})
export default class Dashboard extends Vue {
    user = {
        name: 'Iliya',
        tasks: 20,
        completed: 5,
    }
    completedTasks = '0%';


    loading = false;


    appStore = useAppStore();
    mounted(){
        setTimeout(() => {
            this.completedTasks = this.user.completed / this.user.tasks * 100 + '%'
        },0)
    }

}
</script>

<style lang="scss" scoped>
.dashboard {
    .dashboard-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .dashboard-user {
        color: var(--color-white);
    }
    .dashboard-task-progress {
        color: var(--color-muted);
        display: flex;
        align-items: center;
        flex: 0 1 300px;
    }
    .task-progress-title {
        margin: 0 20px 0 0;
        flex: 0 1 auto;
    }
    .task-progress-container {
        height: 10px;
        border-radius: var(--border-xl);
        flex: 1;
        background: var(--color-muted);
        overflow: hidden;
    }
    .task-progress-bar {
        transition: 1s;
        background: var(--color-green);
        height: 100%;
    }

    .dashboard-banners {
        margin-top: 25px;
        display: flex;
        gap: 25px;
    }
    .mobile-app-banner {
        background: var(--color-muted);
        border-radius: var(--border-xl);
        flex: 1;
        padding: 25px;
    }
    .sign-up-banner {
        background: var(--color-white);
        border-radius: var(--border-xl);
        flex: 2;
        padding: 25px;
    }





    .info-wrapper {
        margin-top: 20px;
        display: flex;
        gap: 15px;
        text-align: center;
    }

    .dashboard-info {
        flex: 1;
        background: var(--bg-secondary);
    }

    .info-header {
        padding: 15px;
        color: var(--color-green);
    }
    .header-title,.header-value {
        margin: 0;
        text-align: left;
    }
    .header-title {
        margin-top: 15px;
        font-size: 1.2rem;
    }
    .header-value {
        font-size: 1.5rem;
    }


    .info-description {
        padding: 15px;
        color: var(--color-white);
        background: var(--color-green);
    }
}

</style>
