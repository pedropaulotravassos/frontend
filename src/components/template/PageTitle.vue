<template>
    <div class="title">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
    export default {
        name: "PageTitle",
        props: {
            name,
        },
    };
</script>

<style>
    @font-face {
        font-family: Lemonada-Bold;
        src: url("../../assets/fonts/Lemonada/static/Lemonada-Bold.ttf");
    }
    .title {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    h1 {
        font-family: Lemonada-Bold;
        font-size: 2.4rem;
    }
</style>