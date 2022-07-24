<template>
    <div class="dashboard">
        <div>{{$l.phrase('Hello')}}</div>
        <token-table class="mt-3"/>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
import Loader from "@/components/shared/Loader.vue";
import MonthlyTasks from "@/components/MonthlyTasks.vue";
import TokenTable from "@/components/TokenTable.vue";

@Component({
    components: {TokenTable, MonthlyTasks, Loader}
})
export default class Dashboard extends Vue {
}
</script>

<style lang="scss" scoped>
.dashboard {}

</style>
