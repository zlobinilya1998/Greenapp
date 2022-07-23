<template>
    <div class="monthly-tasks">
        <v-form ref="form">
            <v-text-field v-model="task.title" :rules="[validationRules.requiredRule]" label="Заголовок"/>
            <v-text-field v-model="task.description" :rules="[validationRules.requiredRule]" label="Описание"/>
        </v-form>
        <div class="tasks-header">
            <h2 class="tasks-title">Список задач</h2>
            <v-slide-x-transition>
                <div class="dashboard-task-progress" v-if="tasks && tasks.length">
                    <p class="task-progress-title" v-html="`${completedTasks} задач выполнено`"/>
                    <div class="task-progress-container">
                        <div :style="{maxWidth: completedTasks}" class="task-progress-bar"/>
                    </div>
                </div>
            </v-slide-x-transition>
            <v-btn @click="addTask" :loading="loading" color="primary">Добавить</v-btn>
        </div>
        <v-progress-circular indeterminate color="primary" v-if="loading" style="display: block;margin: 0 auto" size="50"/>
        <v-fade-transition group leave-absolute class="tasks-container" v-else-if="tasks && tasks.length">
            <div v-for="task in tasks" :key="task.id" class="monthly-task">
                <div class="task-content">
                    <p class="task-title" v-html="task.title"/>
                    <p class="task-description" v-html="task.description"/>
                    <div>Completed {{ task.isCompleted }}</div>
                    <v-btn class="mt-2" color="error" @click="removeTask(task.id)">Удалить</v-btn>
                </div>
            </div>
        </v-fade-transition>
        <div v-else class="mt-2">Задач пока нет...</div>
    </div>
</template>

<script lang="ts">
import {Component, Ref, Vue} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import {TaskService} from "@/services/TaskService";
import {useTaskStore} from "@/store/taskstore";
import {ValidationRules} from "@/helpers/ValidationRules";

@Component({})
export default class MonthlyTasks extends Vue {
    @Ref('form') addTaskForm: { validate: () => boolean, reset: () => void };

    validationRules = ValidationRules
    task = {
        title: '',
        description: '',
    }
    loading = false;

    taskStore = useTaskStore();

    async addTask() {
        if (!this.addTaskForm.validate()) return;
        await this.taskStore.createTask(this.task);
        this.task = {
            title: '',
            description: ''
        }
        this.addTaskForm.reset();
    }

    async loadTasks() {
        await this.taskStore.getTasks();
    }

    async removeTask(id: number) {
        await this.taskStore.removeTask(id)
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
        flex: 1;
        justify-content: flex-end;
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
    }

    .task-progress-title {
        margin: 0 20px 0 0;
    }

    .task-progress-container {
        height: 10px;
        border-radius: var(--border-xl);
        width: 150px;
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
        flex: 0 1 50%;
        padding: 10px;
    }

    .task-content {
        border: 1px solid var(--color-green);
        border-radius: var(--border-xl);
        padding: 15px;
    }

    .task-title {
        color: var(--color-white);
        text-transform: capitalize;
    }

    .task-description {
        color: var(--color-muted);
        text-transform: capitalize;
    }
}
</style>

