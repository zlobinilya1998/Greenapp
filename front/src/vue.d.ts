import ReactiveState from '@/components/ReactiveState';
import $l from '@/components/Localization'

declare module "vue/types/vue" {
    interface Vue {
        $rs: ReactiveState;
        $l: $l
    }
}
