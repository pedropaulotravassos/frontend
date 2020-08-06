<template>
    <div class="signin">
        <PageTitle name="Cadastro de usuário" />
        <b-form @submit="onSubmit" @reset="onReset">
            <!-- NOME -->
            <b-form-group label="Preencha seu nome:" label-for="nome">
                <b-form-input
                    id="nome"
                    v-model="form.nome"
                    type="text"
                    required
                    placeholder="Nome"
                />
            </b-form-group>
            <!-- EMAIL -->
            <b-form-group label="Preencha seu e-mail:" label-for="email">
                <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="email@email.com"
                />
            </b-form-group>
            <!-- TELEFONE(CEL) -->
            <b-form-group label="Telefone:">
                <b-form-input
                    id="cel"
                    v-model="form.cel"
                    type="text"
                    required
                    placeholder="11999999999"
                    maxlength="11"
                />
            </b-form-group>
            <!-- DATA DE NASCIMENTO -->
            <b-form-group label="Data de nascimento:">
                <b-form-input id="dtNascimento" v-model="form.dataNascimento" type="date" required />
            </b-form-group>
            <!-- SENHA -->
            <b-form-group label="Senha" label-for="senha">
                <b-form-input id="senha" v-model="form.senha" type="Password" required />
            </b-form-group>
            <!-- CONFIRMAR SENHA -->
            <b-form-group label="Confirmar senha" label-for="confSenha">
                <b-form-input
                    id="confSenha"
                    v-model="form.confirmarSenha"
                    type="Password"
                    required
                />
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
    import PageTitle from "../../template/PageTitle";
    export default {
        name: "SignIn",
        components: {
            PageTitle,
        },
        data() {
            return {
                form: {
                    nome: "",
                    email: "",
                    cel: "",
                    dataNascimento: "",
                    senha: "",
                    confirmarSenha: "",
                    endereco: {
                        cep: "",
                        complemento: "",
                    },
                },
            };
        },

        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.nome = "";
                this.form.email = "";
                this.form.food = null;
                this.form.checked = [];
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                });
            },
        },
    };
</script>

