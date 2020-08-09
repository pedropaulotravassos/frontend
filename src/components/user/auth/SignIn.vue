<template>
    <b-form @submit="onSubmmit">
        <b-form-group label="e-mail">
            <b-form-input type="email" placeholder="email@email.com" required />
        </b-form-group>
        <b-form-group label="senha">
            <b-form-input type="password" required />
        </b-form-group>

        <b-button type="submit" class="sub" variant="success">logar-se</b-button>

        <b-button type="reset" class="res" variant="success">Sign-up</b-button>
    </b-form>
</template>

<script>
    export default {
        name: "SignIn",
        methods: {
            onSubmit(ev) {
                ev.peventDefault();
                console.log("teste");
            },
        },
    };
</script>

<style>
</style>