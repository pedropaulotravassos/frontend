<template>
    <div class="signin">
        <PageTitle class="title mt-3" name="Cadastro de usuário" />
        <b-form @submit="onSubmit" @reset="onReset">
            <div class="group pessoal">
                <div class="row title">
                    <h3>Dados Pessoais</h3>
                </div>
                <hr />
                <!-- NOME -->
                <b-form-group label="Preencha seu nome:" label-for="nome" class="name">
                    <b-form-input
                        id="nome"
                        v-model="form.nome"
                        type="text"
                        required
                        placeholder="Nome"
                    />
                </b-form-group>

                <!-- EMAIL -->
                <b-form-group label="Preencha seu e-mail:" label-for="email" class="email">
                    <b-form-input
                        id="email"
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="email@email.com"
                    />
                </b-form-group>

                <!-- CPF -->
                <b-form-group label="Preencha seu CPF:" label-for="cpd" class="cpf">
                    <b-form-input
                        id="cpf"
                        v-model="form.cpf"
                        type="text"
                        required
                        placeholder="999.999.999-99"
                        v-mask="maskCPF"
                    />
                </b-form-group>

                <!-- TELEFONE(CEL) -->
                <b-form-group label="Telefone:" class="telefone">
                    <b-form-input
                        id="cel"
                        v-model="form.cel"
                        type="text"
                        required
                        v-mask="maskCel"
                        placeholder="(11)999999999"
                    />
                </b-form-group>

                <!-- DATA DE NASCIMENTO -->
                <b-form-group label="Data de nascimento:" class="dtNasc">
                    <b-form-input
                        id="dtNascimento"
                        v-model="form.dataNascimento"
                        type="date"
                        required
                    />
                </b-form-group>

                <!-- SENHA -->
                <b-form-group label="Senha" label-for="senha" class="senha">
                    <b-form-input
                        id="senha"
                        :state="isEquals"
                        v-model="form.senha"
                        type="password"
                        required
                    />
                </b-form-group>

                <!-- CONFIRMAR SENHA -->
                <b-form-group label="Confirmar senha" label-for="confSenha" class="confSenha">
                    <b-form-input
                        id="confSenha"
                        v-model="form.confirmarSenha"
                        type="password"
                        required
                        :state="isEquals"
                    />
                </b-form-group>
            </div>
            <div class="group end">
                <h3 class="title">Endereço</h3>
                <hr />
                <div class="row">
                    <!-- CEP -->
                    <b-form-group label="CEP" class="row-item">
                        <b-form-input
                            type="text"
                            @keyup="buscaCep()"
                            v-model="endereco.cep"
                            required
                            v-mask="maskCep"
                            placeholder="00000-000"
                        />
                    </b-form-group>
                    <!-- COMPLEMENTO -->
                    <b-form-group label="Número" class="row-item">
                        <b-form-input type="text" v-model="endereco.numero" required />
                    </b-form-group>
                    <b-form-group label="Complemento" class="row-item">
                        <b-form-input type="text" v-model="endereco.comp" required />
                    </b-form-group>
                </div>
                <div class="row">
                    <b-form-group label="Logradouro" class="row-item">
                        <b-form-input type="text" v-model="endereco.logradouro" required disabled />
                    </b-form-group>
                </div>
                <div class="row">
                    <b-form-group label="Bairro" class="row-item">
                        <b-form-input type="text" v-model="endereco.bairro" required disabled />
                    </b-form-group>
                    <b-form-group label="Cidade" class="row-item">
                        <b-form-input type="text" v-model="endereco.localidade" required disabled />
                    </b-form-group>
                    <b-form-group label="UF" class="row-item">
                        <b-form-input type="text" v-model="endereco.uf" required disabled />
                    </b-form-group>
                </div>
            </div>
            <div class="group buttons">
                <b-button type="submit" class="sub" variant="success">Cadastrar-se</b-button>
                <b-button type="reset" class="res" variant="danger">Cancelar</b-button>
            </div>
        </b-form>
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
                isEquals: null,
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
            };
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                if (this.form.senha != this.confirmarSenha) {
                    this.isEquals = false;
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
            },
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
        background: lemonchiffon;
        border-radius: 20px;
        box-shadow: 10px 10px 30px rgb(153, 151, 151);
        margin-top: 15px;
        padding: 40px;
    }
    .group.end {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }
    .row {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
    }
    .row.title {
        margin-bottom: 15px;
        margin-left: 10px;
        grid-area: title;
    }
    .name {
        grid-area: name;
    }
    .cpf {
        grid-area: cpf;
    }
    .email {
        grid-area: email;
    }
    .telefone {
        grid-area: telefone;
    }
    .dtNasc {
        grid-area: dtNasc;
    }
    .senha {
        grid-area: senha;
    }
    .confSenha {
        grid-area: confSenha;
    }
    .group.pessoal {
        display: grid;
        grid-template-areas:
            "title title title"
            "name name name"
            "email email email"
            "cpf telefone dtNasc"
            "senha senha senha "
            "confSenha confSenha confSenha ";
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
    }
    .sub {
        width: 47%;
    }
    .res {
        margin-left: 5%;
        width: 47%;
    }
    .row-item {
        flex-grow: 1;
        margin-right: 2%;
    }
</style>