<template>
    <v-form class="pa-0 ma-0">
        <v-container class="pa-0 ma-0">
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                        v-model="user.email"
                        :rules="[rules.required, rules.email]"
                        label="E-mail"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="mt-0 pt-0">
                <v-col cols="12" sm="6" class="pt-0 mt-0">
                    <v-text-field v-model="email" :rules="[rules.required]" label="Password"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="ma-0 pa-0">
                <v-col cols="6" class="ma-0 pa-0">
                    <v-btn class="green darken-2 white--text" @click="onSubmmit">entrar</v-btn>
                </v-col>
                <v-col cols="6" class="ma-0 pa-0">
                    <v-btn class @click="onRouterClick">ingressar</v-btn>
                </v-col>
            </v-row>
        </v-container>
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