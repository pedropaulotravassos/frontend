<template>
    <header>
        <a href="_" class="logo">
            <img src="..\..\assets\img\logo.png" />
        </a>
    </header>
</template>

<script>
    export default {
        name: "Header",
        components: {},
    };
</script>

<style>
    header {
        background: linear-gradient(#90ee90, #d2ffa6e8);
        grid-area: header;
        border-bottom: dashed 2px #436e43f8;
    }
    .logo img {
        height: 100%;
    }
</style>