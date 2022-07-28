<template>
    <div class="dashboard">
        <token-table class="mt-3"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import MonthlyTasks from "@/components/MonthlyTasks.vue";
import TokenTable from "@/components/TokenTable.vue";

@Component({
    components: {TokenTable, MonthlyTasks}
})
export default class Dashboard extends Vue {}
</script>

