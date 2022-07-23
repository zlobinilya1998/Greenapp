import Vue from "vue";

import ReactiveState from '@/components/ReactiveState.vue';

declare module "vue/types/vue" {
    interface Vue {
        $rs: ReactiveState;
    }
}
