<template>
  <div class="monthly-tasks">
      <div class="tasks-header">
          <h2 class="tasks-title">Monthly tasks</h2>
          <div class="tasks-actions">
              <button class="action-btn">Archive</button>
              <button class="action-btn" @click="addTask">New</button>
          </div>
      </div>
      <div class="tasks-divider"/>
      <div class="tasks-container" v-if="tasks">
          <div v-for="(task,index) in tasks" :key="index" class="monthly-task">
              <p class="task-title" v-html="task.title"/>
              <p class="task-description" v-html="task.description"/>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";

@Component({})
export default class MonthlyTasks extends Vue {
    appStore = useAppStore();
    async addTask(){
        await this.appStore.addTask();
        this.loadTasks();
    }
    loadTasks(){
        this.appStore.getTasks();
    }

    get tasks(){
        return this.appStore.tasks;
    }

    created(){
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

    }
    .action-btn {
        padding: 5px;
        border-radius: 20px;
        background: var(--color-green);
        color: var(--color-white);
        cursor: pointer;
        border: unset;
        min-width: 70px;
        &:not(:last-child){
            margin-right: 10px;
        }
    }

    .tasks-divider {
        border: 1px solid var(--color-white);
        width: 100%;
    }

    .tasks-container {
        display: flex;
        flex-wrap: wrap;
    }
    .monthly-task {
        flex: 50%;
    }
    .task-title {
        color: var(--color-green);
    }
    .task-description {
        color: var(--color-muted);
    }
}
</style>

