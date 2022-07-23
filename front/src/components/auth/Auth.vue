<template>
    <div>
        <v-form ref="form">
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.email" label="Емейл"/>
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.password" label="Пароль"/>
        </v-form>
        <div class="pt-2 error--text text-left">
            {{ authError ? 'Неверный логин или пароль' : '' }}
        </div>
        <div class="mt-2">
            <v-btn color="primary" class="mr-2" @click="login" :loading="loading" v-html="'Вход'"/>
            <v-btn color="primary" @click="$router.push({name:'register'})" :loading="loading" v-html="'Регистрация'"/>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Ref} from "vue-property-decorator"
import {ValidationRules} from "@/helpers/ValidationRules";
import {useAppStore} from "@/store/appstore";

@Component({})
export default class Auth extends Vue {
    @Ref('form') loginForm: { validate: () => boolean };
    appStore = useAppStore();
    validationRules = ValidationRules;
    loading = false;
    form = {
        email: 'qwertin1998@gmail.com',
        password: 'qwertin1998',
    }
    authError = false;

    async login() {
        if (!this.loginForm.validate()) return;
        this.loading = true
        try {
            this.authError = false;
            await this.appStore.login(this.form);
            await this.$router.push({name: 'dashboard'});
        } catch (e) {
            this.authError = true;
        } finally {
            this.loading = false
        }
    }
}
</script>

<style lang="scss">

</style>
