<template>
    <div class="dashboard">
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


    .dashboard-banners {
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
