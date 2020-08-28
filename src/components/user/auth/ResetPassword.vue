<template>
    <div class="mt-1 reset-password">
        <div>
            <div class="row title">
                <PageTitle title="Esqueci minha senha!" />
            </div>
            <v-form class="mt-5" @submit="onSubmit" @reset="onReset">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field type="email" label="E-mail" v-model="form.email" required></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="d-flex justify-space-around">
                                <v-btn class="mr-4 flex-grow-1" type="submit" color="success">
                                    <v-icon>refresh</v-icon>
                                    <span class="ml-4">Gerar nova Senha</span>
                                </v-btn>
                                <v-btn type="reset" class="flex-grow-1" color="warning">
                                    <v-icon>cancel</v-icon>
                                    <span class="ml-4">Cancelar</span>
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </div>
    </div>
</template>

<script>
    import PageTitle from "../../template/PageTitle";
    import axios from "axios";
    import { baseUrlApiUsuario } from "../../../global";
    const config = {
        method: "post",
        url: `${baseUrlApiUsuario}/usuario/resetar-senha`,
        headers: {
            "Content-Type": "application/json",
        },
    };
    export default {
        name: "resetPassword",
        components: { PageTitle },
        data() {
            return {
                form: {
                    email: "",
                },
            };
        },
        methods: {
            onSubmit(ev) {
                ev.preventDefault();
                config.data = JSON.stringify(this.form);
                axios(config).then((res) => {
                    console.log(res.data);
                    this.$toasted.global.defaultSuccess(res.data);
                    this.$router.push("/");
                });
            },
            onReset() {
                this.form.email = "";
                this.$toasted.global.defaultAlert(
                    "Operação cancelada pelo usuário"
                );
                this.$router.push("/");
            },
        },
    };
</script>

<style>
    .reset-password {
        background: lemonchiffon;
        border-radius: 20px;
        box-shadow: 10px 10px 30px rgb(153, 151, 151);

        padding: 40px;
    }
    .row-title {
        text-align: center;
    }
</style>