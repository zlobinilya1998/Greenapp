<template>
    <div class="monthly-tasks">
        <v-form ref="form">
            <v-text-field v-model="task.title" label="Title"/>
            <v-text-field v-model="task.description" label="Description"/>
        </v-form>
        <div class="tasks-header">
            <h2 class="tasks-title">Monthly tasks</h2>
            <div class="tasks-actions">
                <div class="dashboard-task-progress">
                    <p class="task-progress-title" v-html="`${completedTasks} task completed`"/>
                    <div class="task-progress-container">
                        <div :style="{maxWidth: completedTasks}" class="task-progress-bar"/>
                    </div>
                </div>
                <v-btn @click="addTask" :loading="loading" color="primary">Add task</v-btn>
            </div>
        </div>

        <v-progress-circular indeterminate color="primary" v-if="loading" style="display: block;margin: 0 auto"
                             size="50"/>
        <div class="tasks-container" v-else-if="tasks">
            <div v-for="(task,index) in tasks" :key="index" class="monthly-task">
                <div class="task-content">
                    <p class="task-title" v-html="task.title"/>
                    <p class="task-description" v-html="task.description"/>
                    <div>Completed {{task.isCompleted}}</div>
                    <v-btn color="error">Delete</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import {TaskService} from "@/services/TaskService";
import {useTaskStore} from "@/store/taskstore";

@Component({})
export default class MonthlyTasks extends Vue {
    @Ref('form') loginForm: { validate: () => boolean };

    task = {
        title: 'My first task',
        description: 'Task description',
    }
    loading = false;

    taskStore = useTaskStore();

    async addTask() {
        await this.taskStore.createTask(this.task)
        await this.loadTasks();

        this.task = {
            title: '',
            description: ''
        }
    }

    async loadTasks() {
        await this.taskStore.getTasks();
    }

    get tasks() {
        return this.taskStore.tasks;
    }

    get completedTasks() {
        const length = Math.ceil(this.tasks?.filter(task => task.isCompleted).length / this.tasks?.length * 100)
        return `${length}%`
    }

    created() {
        this.loadTasks();
    }
}
</script>

<style lang="scss" scoped>
.monthly-tasks {
    margin-top: 25px;

    .tasks-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tasks-title {
        color: var(--color-white);
    }

    .tasks-actions {
        display: flex;
    }

    .action-btn {
        padding: 5px;
        border-radius: 20px;
        background: var(--color-green);
        color: var(--color-white);
        cursor: pointer;
        border: unset;
        min-width: 70px;

        &:not(:last-child) {
            margin-right: 10px;
        }
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

    .tasks-container {
        display: flex;
        flex-wrap: wrap;
        margin: 25px -10px 0 -10px;
    }

    .monthly-task {
        flex: 50%;
        padding: 10px;
    }

    .task-content {
        border: 1px solid var(--color-green);
        border-radius: var(--border-xl);
        padding: 15px;
    }

    .task-title {
        color: var(--color-white);
    }

    .task-description {
        color: var(--color-muted);
    }
}
</style>

