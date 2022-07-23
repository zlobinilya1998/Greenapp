<template>
    <div>
        <v-form ref="form">
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.firstName" label="Имя"/>
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.lastName" label="Фамилия"/>
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.email" label="Емейл"/>
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.password" label="Пароль"/>
            <v-text-field :rules="[validationRules.requiredRule]" v-model="form.password" label="Повторите пароль"/>
        </v-form>
        <div class="pt-2 error--text text-left">
            {{ authError ? 'Пользователь с таким email уже существует' : '' }}
        </div>
        <v-layout class="mt-2">
            <v-spacer/>
            <v-btn color="primary" class="mr-2" @click="$router.push({name: 'login'})" :loading="loading" v-html="'Назад'"/>
            <v-btn color="primary" @click="register" :loading="loading" v-html="'Зарегистрироваться'"/>
        </v-layout>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Ref} from "vue-property-decorator"
import {ValidationRules} from "@/helpers/ValidationRules";
import {useAppStore} from "@/store/appstore";

@Component({})
export default class Register extends Vue {
    @Ref('form') loginForm: { validate: () => boolean };
    appStore = useAppStore();
    validationRules = ValidationRules;
    loading = false;
    form = {
        firstName: 'Илья',
        lastName: 'Злобин',
        email: 'qwertin1998@gmail.com',
        password: 'qwertin1998',
        repeatPassword: 'qwertin1998',
    }
    authError = false;

    async register() {
        if (!this.loginForm.validate()) return;
        this.loading = true
        try {
            this.authError = false;
            await this.appStore.register(this.form);
            await this.$router.push({name: 'dashboard'});
        } catch (e) {
            this.authError = true;
        } finally {
            this.loading = false
        }
    }
}
</script>
