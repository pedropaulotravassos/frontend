<template>
    <div class="title">
        <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        name: "PageTitle",
        props: ["title"],
    };
</script>

<style>
    .title {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    h1 {
        font-family: lemonada-bold;
        font-size: 2.4rem;
    }
</style>