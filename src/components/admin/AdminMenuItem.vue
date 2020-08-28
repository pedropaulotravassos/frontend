<template>
    <v-card :to="route">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card-title>
                        <v-icon x-large>{{icon}}</v-icon>
                        <span class="ml-5">{{name}}</span>
                    </v-card-title>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    export default {
        name: "AdminMenuItem",
        props: ["icon", "name", "route"],
    };
</script>

<style>
</style>