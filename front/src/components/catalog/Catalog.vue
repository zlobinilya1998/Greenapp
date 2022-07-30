<template>
  <div>
      <h2>Каталог</h2>
      <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class Catalog extends Vue {
}
</script>
