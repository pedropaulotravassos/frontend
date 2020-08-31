<template>
    <v-container fluid class="mt-6">
        <v-col cols="12">
            <v-row justify="center">
                <PageTitle title="Painel Administrativo" />
            </v-row>
            <v-row justify="space-around">
                <v-cols class="col-12 col-md-4" v-for="(item) in itens" :key="item">
                    <AdminMenuItem
                        :icon="item.icon"
                        :name="item.name"
                        :route="item.route"
                        :key="item"
                    />
                </v-cols>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
    import AdminMenuItem from "./AdminMenuItem";
    import PageTitle from "../template/PageTitle";
    export default {
        name: "AdminMenu",
        components: {
            AdminMenuItem,
            PageTitle,
        },
        data() {
            return {
                itens: [
                    {
                        icon: "store",
                        name: "Departamentos",
                        route: "/admin/department",
                    },
                    {
                        icon: "view_comfy",
                        name: "Categorias",
                        route: "/admin/category",
                    },
                    {
                        icon: "shopping_basket",
                        name: "Produtos",
                        route: "/admin/product",
                    },
                    {
                        icon: "dashboard",
                        name: "Dashboard",
                        route: "/admin/department",
                    },
                    {
                        icon: "monetization_on",
                        name: "Vendas",
                        route: "/admin/department",
                    },
                    {
                        icon: "local_offer",
                        name: "Descontos",
                        route: "/admin/department",
                    },
                ],
            };
        },
    };
</script>

<style>
</style>