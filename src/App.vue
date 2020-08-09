<template>
    <div id="app">
        <Header />
        <Content />
        <Aside />
        <Footer />
    </div>
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
    * {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0.05%;
    }
    #app {
        display: grid;
        grid-template-rows: 90px 1fr 40px;
        grid-template-columns: 1fr 25%;
        grid-template-areas:
            "header header"
            "content content"
            "footer footer";
    }
    #app.cart-show {
        grid-template-areas:
            "header header"
            "content aside"
            "footer footer";
    }
</style>
