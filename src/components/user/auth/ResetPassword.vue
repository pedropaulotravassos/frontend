<template>
    <div class="reset-password">
        <div>
            <div class="row title">
                <h3>Esqueci minha senha!</h3>
            </div>
            <b-form class="mt-5">
                <b-form-group label="Email">
                    <b-form-input type="email" required placeholder="email@email.com"></b-form-input>
                </b-form-group>
                <b-form-group class="mt-5">
                    <b-button type="submit" class="sub" variant="success">Gerar nova Senha</b-button>
                    <b-button type="reset" class="res" variant="danger">Cancelar</b-button>
                </b-form-group>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "resetPassword",
        data() {
            return {
                form: {
                    email: "",
                },
            };
        },
    };
</script>

<style>
    .reset-password {
        background: lemonchiffon;
        border-radius: 20px;
        box-shadow: 10px 10px 30px rgb(153, 151, 151);
        margin-top: 15px;
        padding: 40px;
    }
    .row-title {
        text-align: center;
    }
</style>