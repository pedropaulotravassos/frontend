<template>
    <b-form>
        <b-form-group label="e-mail">
            <b-form-input type="email" placeholder="email@email.com" required />
        </b-form-group>
        <b-form-group label="senha">
            <b-form-input type="password" required />
        </b-form-group>

        <div>
            <b-button @click="onSubmmit" type="submit" class="sub" variant="success">Logar-se</b-button>

            <router-link to="/signUp" tag="b-button" class="res">Ingressar</router-link>
        </div>
        <div class="row-link mb-0">
            <router-link class="link" to="/reset-password">Esqueci minha senha</router-link>
        </div>
    </b-form>
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