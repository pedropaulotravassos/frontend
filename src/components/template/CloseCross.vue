<template>
    <v-btn icon x-large color="deep-orange" class="float-right" @click="outClick">
        <v-icon>clear</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "CloseCross",
        props: ["routeTo"],
        methods: {
            outClick() {
                this.$router.push(this.$props.routeTo);
            },
        },
    };
</script>

<style>
</style>