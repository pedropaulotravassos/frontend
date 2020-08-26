<template>
    <v-app id="#app">
        <Header />
        <Content />
        <Aside />
        <Footer />
    </v-app>
</template>

<script>
    import Header from "./components/template/Header";
    import Content from "./components/template/Content";
    import Aside from "./components/template/Aside";
    import Footer from "./components/template/Footer";
    export default {
        name: "App",
        components: {
            Header,
            Content,
            Aside,
            Footer,
        },
    };
</script>

<style>
    @import url("./assets/css/fonts.css");
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0.05%;
    }

    .toast-alert {
        box-shadow: none;
        background: linear-gradient(135deg, #ffe603 0%, #e9d521 0%, #ffd82a 0%);
        color: #000;
    }
</style>