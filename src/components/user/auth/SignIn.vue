<template>
    <v-form>
        <v-text-field type="email" placeholder="Digite seu e-mail" required></v-text-field>
        <v-text-field type="password" placeholder="Digite sua senha" required />

        <div>
            <v-btn @click="onSubmmit" color="success" type="submit" class="sub" variant="success" />

            <router-link to="/signUp" tag="b-button" class="res">Ingressar</router-link>
        </div>
        <div class="row-link mb-0">
            <router-link class="link" to="/reset-password">Esqueci minha senha</router-link>
        </div>
    </v-form>
</template>

<script>
    export default {
        name: "SignIn",
        methods: {
            onSubmmit() {
                this.$emit("on-submmit", false);
            },
        },
    };
</script>

<style>
    .row-link {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .row-link .link {
        width: 100%;
        text-align: center;
        color: rgb(46, 116, 247);
    }
</style>