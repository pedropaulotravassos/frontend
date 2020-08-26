<template>
    <v-form class="pa-0 ma-0">
        <v-text-field
            v-model="user.email"
            :rules="[rules.required, rules.email]"
            label="E-mail"
            append-icon="mail"
        ></v-text-field>
        <v-text-field
            v-model="user.senha"
            :rules="[rules.required]"
            label="Password"
            append-icon="vpn_key"
        ></v-text-field>

        <v-row class="ma-0 pa-0">
            <v-col cols="6" class="ma-0 pa-0">
                <v-btn class="green darken-2 white--text" @click="onSubmmit">entrar</v-btn>
            </v-col>
            <v-col cols="6" class="ma-0 pa-0">
                <v-btn class @click="onRouterClick">ingressar</v-btn>
            </v-col>
        </v-row>

        <div class="mt-4 d-flex justify-center row-link">
            <router-link class="text-decoration-none" to="/reset-password">Esqueci minha senha</router-link>
        </div>
    </v-form>
</template>

<script>
    export default {
        name: "SignIn",
        data() {
            return {
                user: {
                    email: "",
                    senha: "",
                },
                rules: {
                    required: (value) => !!value || "Required.",
                    counter: (value) => value.length <= 20 || "Max 20 characters",
                    email: (value) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || "Invalid e-mail.";
                    },
                },
            };
        },
        methods: {
            onSubmmit() {
                this.$emit("on-submmit", false);
            },
            onRouterClick() {
                this.$router.push("/signup");
            },
        },
    };
</script>

<style>
    .row-link {
        border-radius: 15px;
        font-family: lemonada-medium;
        font-size: 0.8rem;
    }
    .row-link:hover {
        background-color: #dadadadc;
    }
</style>