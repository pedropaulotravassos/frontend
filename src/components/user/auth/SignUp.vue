<template>
    <div class="signin group mt-2 my-1 amber lighten-5">
        <!-- <div class="d-flex justify-end my-0 "> -->
        <!-- <v-btn icon x-large>
            <v-icon right>clear</v-icon>
        </v-btn>-->
        <!-- </div> -->
        <v-btn icon x-large color="deep-orange" class="float-right" @click="outClick">
            <v-icon>clear</v-icon>
        </v-btn>
        <PageTitle class="title mt-4" title="Cadastro de usuário" />

        <v-form @submit="onSubmit">
            <h2 class>Dados Pessoais</h2>
            <v-layout>
                <v-row>
                    <!-- NOME -->
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="form.nome"
                            type="text"
                            :rules="[rules.required]"
                            placeholder="Digite seu nome"
                            label="Nome"
                        />
                    </v-col>
                    <!-- EMAIL -->
                    <v-col cols="12" md="6">
                        <v-text-field
                            v-model="form.email"
                            type="email"
                            :rules="[rules.required, rules.email]"
                            placeholder="email@email.com"
                            label="E-mail"
                        />
                    </v-col>
                    <!-- CPF -->
                    <v-col cols="12" sm="4">
                        <v-text-field
                            v-model="form.cpf"
                            type="text"
                            :rules="[rules.required]"
                            placeholder="999.999.999-99"
                            v-mask="maskCPF"
                            label="CPF"
                        />
                    </v-col>
                    <!-- TELEFONE(CEL) -->
                    <v-col cols="12" sm="4">
                        <v-text-field
                            label="Celular"
                            v-model="form.cel"
                            type="text"
                            :rules="[rules.required]"
                            v-mask="maskCel"
                            placeholder="(11)999999999"
                        />
                    </v-col>
                    <!-- DATA DE NASCIMENTO -->
                    <v-col cols="12" sm="4">
                        <v-text-field
                            label="Data de nascimento"
                            v-model="form.dataNascimento"
                            type="date"
                            :rules="[rules.required]"
                        />
                    </v-col>
                    <!-- SENHA -->
                    <v-col cols="12" sm="6">
                        <v-text-field
                            label="Senha"
                            :state="isEquals"
                            v-model="form.senha"
                            type="password"
                            placeholder="Digite a senha"
                            :rules="[rules.required,rules.equalPassword(this.form.confirmarSenha, this.form.senha)]"
                        />
                    </v-col>
                    <!-- CONFIRMAR SENHA -->
                    <v-col cols="12" sm="6">
                        <v-text-field
                            label="Confirmar senha"
                            v-model="form.confirmarSenha"
                            type="password"
                            :rules="[rules.required,rules.equalPassword(this.form.confirmarSenha, this.form.senha)]"
                            :state="isEquals"
                            placeholder="Confirme a senha"
                        />
                    </v-col>
                </v-row>
            </v-layout>

            <h2 class="mt-4 my-4">Endereço</h2>
            <!-- CEP -->
            <v-layout>
                <v-row>
                    <v-col cols="12" sm="4">
                        <v-text-field
                            label="CEP"
                            type="text"
                            @keyup="buscaCep()"
                            v-model="endereco.cep"
                            :rules="[rules.required]"
                            v-mask="maskCep"
                            placeholder="00000-000"
                        />
                    </v-col>
                    <!-- COMPLEMENTO -->
                    <v-col cols="12" sm="3">
                        <v-text-field
                            type="text"
                            v-model="endereco.numero"
                            label="Número"
                            placeholder=" "
                            :rules="[rules.required]"
                        />
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-text-field
                            type="text"
                            v-model="endereco.comp"
                            :rules="[rules.required]"
                            placeholder=" "
                            label="Complemento"
                        />
                    </v-col>
                    <v-col cols="12" sm="5">
                        <v-text-field
                            type="text"
                            label="Logradouro"
                            placeholder=" "
                            v-model="endereco.logradouro"
                            :rules="[rules.required]"
                            disabled
                        />
                    </v-col>
                    <v-col cols="12" sm="4">
                        <v-text-field
                            type="text"
                            label="Bairro"
                            placeholder=" "
                            v-model="endereco.bairro"
                            :rules="[rules.required]"
                            disabled
                        />
                    </v-col>
                    <v-col cols="12" sm="2">
                        <v-text-field
                            type="text"
                            placeholder=" "
                            label="Cidade"
                            v-model="endereco.localidade"
                            :rules="[rules.required]"
                            disabled
                        />
                    </v-col>
                    <v-col cols="12" sm="1">
                        <v-text-field
                            label="UF"
                            placeholder=" "
                            type="text"
                            v-model="endereco.uf"
                            :rules="[rules.required]"
                            disabled
                        />
                    </v-col>
                </v-row>
            </v-layout>
            <v-layout class="d-flex justify-space-around">
                <v-btn type="submit" class="green lighten-1 white--text flex-md-grow-1">Cadastrar-se</v-btn>
                <v-btn
                    @click="onReset"
                    type="reset"
                    class="red lighten-1 white--text ml-2 flex-md-grow-1"
                >Cancelar</v-btn>
            </v-layout>
        </v-form>
    </div>
</template>

<script>
    import PageTitle from "../../template/PageTitle";
    import axios from "axios";
    import { baseUrlApiUsuario } from "../../../global";
    export default {
        name: "SignIn",
        components: {
            PageTitle,
        },
        data() {
            return {
                maskCep: "#####-###",
                maskCel: "(##)#########",
                maskCPF: "###.###.###-##",
                form: {
                    nome: "",
                    cpf: "",
                    email: "",
                    cel: "",
                    dataNascimento: "",
                    senha: "",
                    confirmarSenha: "",
                },
                endereco: {
                    cep: "",
                    logradouro: "",
                    numero: "",
                    comp: "",
                    bairro: "",
                    localidade: "",
                    uf: "",
                },

                rules: {
                    required: (value) => !!value || "Required.",
                    counter: (value) => value.length <= 20 || "Max 20 characters",
                    email: (value) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || "Invalid e-mail.";
                    },
                    equalPassword: (value, valueProbe) =>
                        value == valueProbe || "Senhas não conferem",
                },
            };
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                if (this.form.senha != this.confirmarSenha) {
                    this.$toasted.defaultError();
                }
                let payLoad = this.form;
                payLoad.endereco = { cep: this.endereco.cep };
                const complemento = "Num: "
                    .concat(this.endereco.numero)
                    .concat(" Comp: ")
                    .concat(this.endereco.comp);
                payLoad.endereco.complemento = complemento;
                axios
                    .post(`${baseUrlApiUsuario}/usuario/criar`, payLoad)
                    .then(() => {
                        this.$toasted.global.defaultSuccess();
                        this.endereco = {};
                        this.form = {};
                    })
                    .catch((e) => this.$toasted.global.defaultError(e));
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.nome = "";
                this.form.email = "";
                this.form.cel = "";
                this.form.dataNascimento = "";
                this.form.senha = "";
                this.form.confirmarSenha = "";
                this.endereco.cep = "";
                this.endereco.numero = "";
                this.endereco.comp = "";
                this.endereco.bairro = "";
                this.endereco.localidade = "";
                this.endereco.uf = "";
                this.$toasted.show("Redirecionando !!", {
                    theme: "outline",
                    position: "top-right",
                    duration: 1000,
                });
                this.$router.push("/");
            },
            // outClick() {
            //     this.$router.push("/");
            // },

            buscaCep() {
                if (this.endereco.cep.length == 9) {
                    const config = {
                        method: "get",
                        url: `https://viacep.com.br/ws/${this.endereco.cep}/json/`,
                        headers: {},
                    };
                    const endereco = this.endereco;
                    axios(config)
                        .then(function (response) {
                            endereco.logradouro = response.data.logradouro;
                            endereco.bairro = response.data.bairro;
                            endereco.localidade = response.data.localidade;
                            endereco.uf = response.data.uf;
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            },
        },
    };
</script>

<style>
    .title {
        margin-bottom: 45px;
    }
    .group {
        /* background: lemonchiffon; */
        box-shadow: 10px 10px 30px rgb(153, 151, 151);
        margin-top: 15px;
        padding: 40px;
    }
</style>