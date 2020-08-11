<template>
    <div class="ml-1 mr-2">
        <b-avatar :src="srcAvatar" size="4rem"></b-avatar>
    </div>
</template>

<script>
    export default {
        name: "Avatar",
        props: ["srcAvatar"],
    };
</script>

<style>
</style>