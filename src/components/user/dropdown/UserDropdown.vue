<template>
    <section>
        <v-expansion-panels accordion flat class="ml-0 pl-0">
            <v-expansion-panel>
                <v-expansion-panel-header class="pa-2">
                    <v-container class="d-flex align-center">
                        <v-avatar size="48">
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-avatar>
                        <h4 class="ml-4">Pedro Paulo Medeiros de Mello Travassos</h4>
                    </v-container>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="pa-0 ma-0">
                    <SignIn @on-submmit="onClickChild" class="pa-0"></SignIn>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-divider></v-divider>
    </section>
</template>

<script>
    import SignIn from "../auth/SignIn";
    export default {
        name: "UserDropdown",
        props: ["draw"],
        components: {
            SignIn,
        },
        data() {
            return {
                user: {
                    name: "Sign-In/Sign-Up",
                    avatar:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe0Hsu8YYt0Gi6ZxY-aPkV7Os7abmxProPNg&usqp=CAU",
                },
                logged: false,
                isVisible: this.$props.draw,
            };
        },
        methods: {
            showContent() {
                this.isVisible = !this.isVisible;
            },
            onClickChild(value) {
                console.log(value); // someValue
            },
        },
    };
</script>

<style>
</style>
