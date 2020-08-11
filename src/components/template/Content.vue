<template>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
    export default {
        name: "Content",
    };
</script>

<style>
    main {
        grid-area: content;
        background-color: #e5ebdd;
        padding: 30px 20px 50px 20px;
    }
</style>