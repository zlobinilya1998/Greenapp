<template></template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class ReactiveState extends Vue {
    mounted(){
        Vue.prototype.$rs = this
    }
    get br(){
        return this.$vuetify.breakpoint;
    }
}
</script>

<style lang="scss">

</style>
