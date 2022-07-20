<template>
    <div class="dashboard">
        <div class="dashboard-graph">
            <div class="dashboard-chart">
                <canvas style="width: 100%;object-fit: contain" ref="chart"></canvas>
            </div>
            <div class="dashboard-diagram">
                <canvas style="width: 100%;object-fit: contain" ref="diagram"></canvas>
            </div>
        </div>
        <div class="info-wrapper" v-if="dashboard">
            <div class="dashboard-info" v-for="(info,index) in dashboard.infos" :key="index">
                <div class="info-title" v-html="info.title"/>
                <div class="info-divider"/>
                <div class="info-description" v-html="info.value"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Ref} from "vue-property-decorator"
import {useAppStore} from "@/store/appstore";
import Loader from "@/components/shared/Loader.vue";
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);
@Component({
    components: {Loader}
})
export default class Dashboard extends Vue {
    @Ref('chart') chart: HTMLCanvasElement;
    @Ref('diagram') diagram: HTMLCanvasElement;
    get dashboard() {
        return this.appStore.dashboard;
    }

    async loadDashboard(){
        const dashboard = await this.appStore.getDashboard();
        const config = {
            type: 'line',
            data: dashboard.graph,
        };
        const chart = new Chart(
            this.chart,
            config as any
        );
        const diagram = new Chart(this.diagram,{
            type: 'doughnut',data: dashboard.diagram
        })
    }

    appStore = useAppStore();

    mounted() {
        this.loadDashboard();
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
    .dashboard-graph {
        display: flex;
    }
    .dashboard-chart {
        flex: 1;
        max-height: 420px;
        margin-right: 20px;
        background: var(--bg-secondary);
        border-radius: var(--border-xl);
        padding: var(--padding-xl);
    }
    .dashboard-diagram {
        flex: 1;
        background: var(--bg-secondary);
        border-radius: var(--border-xl);
        padding: var(--padding-xl);
    }
    .info-wrapper {
        margin-top: 20px;
        display: flex;
        gap: 15px;
        text-align: center;
    }

    .dashboard-info {
        flex: 1;
        border-radius: var(--border-xl);
        background: var(--bg-secondary);
        padding: 15px 15px 20px;
    }

    .info-title {
        color: var(--color-green);
    }

    .info-divider {
        height: 1px;
        background: #313131;
        margin: 15px 0 20px;
    }

    .info-description {
        color: var(--color-white);
    }
}

</style>
