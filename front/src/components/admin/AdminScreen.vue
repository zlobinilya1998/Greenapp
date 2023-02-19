<template>
  <div>
      <v-data-table
          :loading="loading"
          :headers="headers"
          :items="users"
          :items-per-page="10"
          class="elevation-1"
      >
          <template #no-data>Нет данных</template>
      </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import {UserService} from "@/services/UserService";
import {TUser} from "@/models/entites/User";

@Component({})
export default class AdminScreen extends Vue {
    users: TUser[] = []
    headers = [
        {text: 'Id', value: 'id'},
        {text: 'Имя', value: 'firstName'},
        {text: 'Фамилия', value: 'lastName'},
        {text: 'Емейл', value: 'email'},
        {text: 'Заблокирован', value: 'isBanned'},
    ]


    async created(){
        this.users = await UserService.getAll();
    }
}
</script>

<style lang="scss">

</style>
