<template>
    <v-footer dark padless short height="30">
        <v-card class="flex footer-content" flat tile>
            <v-card-title class="teal lighten-4 black--text pt-0 pb-0">
                <v-list-item-avatar>
                    <v-img src="../../assets/img/trademark.png"></v-img>
                </v-list-item-avatar>
                <strong
                    class="subheading pl-0 hidden-sm-and-down"
                >Desenvolvido por Pedro Paulo Travassos</strong>
                <div class="pl-1">
                    &copy;
                    {{ new Date().getFullYear() }}
                </div>
                <v-spacer></v-spacer>

                <v-btn color="black" v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            icons: ["mdi-facebook", "mdi-instagram", "mdi-linkedin", "mdi-git"],
        }),
    };
</script>

<style>
</style>