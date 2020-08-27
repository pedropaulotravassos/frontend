<template>
    <nav>
        <v-toolbar app class="header">
            <v-app-bar-nav-icon @click="showMenu =!showMenu"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <router-link to="/" class="text-decoration-none">
                <div class="d-flex justify-center align-center">
                    <v-img class="logo" src="..\..\assets\img\logo.png" />
                    <v-toolbar-title class="ml-4 grey--text text--darken-3 company-name">Dona Fruta</v-toolbar-title>
                </div>
            </router-link>
            <v-spacer></v-spacer>
            <v-btn icon @click="showCart = !showCart">
                <v-icon class="grey--text text--darken-3">shopping_cart</v-icon>
            </v-btn>
        </v-toolbar>

        <!-- Drawers -->
        <v-navigation-drawer v-model="showMenu" absolute temporary>
            <UserDropdown :draw="items" />

            <v-list dense>
                <v-list-item v-for="item in items" :key="item.title" :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer v-model="showCart" absolute temporary app right>
            <ul>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, deserunt odit. Impedit facere non sed cumque sint, obcaecati optio voluptate nemo omnis, eius eveniet quos consequuntur amet consectetur beatae odit?</li>
                <li>Modi, voluptate adipisci dolore fugiat est amet sit consequatur repellat id nam doloribus aperiam odit, ab dolorum distinctio. Doloribus repellendus autem tempore amet ratione! Cumque non quidem suscipit dolore quis!</li>
                <li>Pariatur, beatae. Minus, molestias aspernatur, labore, ipsa repudiandae quas non accusantium nihil deleniti qui nulla provident itaque assumenda. Fuga beatae, fugiat dignissimos id vero non aperiam voluptatem facilis asperiores eos?</li>
            </ul>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint hic necessitatibus illo sequi magnam ipsa voluptatibus officiis dignissimos quia, tenetur numquam eius at, harum rem exercitationem enim. Dolorem, reprehenderit.</li>
                <li>Ad animi autem nam officia id voluptas quidem, eum incidunt alias veniam mollitia. Ducimus, pariatur magnam. Aliquam dignissimos debitis, quas illo dolore, ea atque at ullam quasi blanditiis, enim iste!</li>
                <li>Expedita alias eum enim numquam, ab eligendi aperiam vitae in quos pariatur? Eos culpa alias dolore beatae. Amet, at eius quasi cum reiciendis nihil, aliquid, sed a odio facilis ratione?</li>
            </ul>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import UserDropdown from "../user/dropdown/UserDropdown";
    export default {
        name: "Header",
        components: { UserDropdown },
        data() {
            return {
                showMenu: false,
                showCart: false,
                items: [
                    {
                        icon: "home",
                        title: "Home",
                        route: "/",
                    },
                    {
                        icon: "dashboard",
                        title: "Departamentos",
                        route: "/departmes",
                    },
                ],
            };
        },
        methods: {},
    };
</script>

<style>
    .header {
        background: linear-gradient(#90ee90, #d2ffa6e8);
        border-bottom: dashed 2px #436e43f8;
    }
    .logo {
        height: 60px;
        width: 60px;
    }

    .company-name {
        font-family: lemonada-semibold;
        text-decoration: none;
    }
    .v-toolbar__title {
        text-decoration: none;
    }
</style>