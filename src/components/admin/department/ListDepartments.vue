<template >
    <v-card flat class="orange accent-1 card-art">
        <v-card-title class="my-3 pt-5 my-3">
            <span class="ml-6 mt-4 card-title-font">Departamentos</span>
            <v-spacer></v-spacer>
            <v-card-actions class="d-flex justify-end my-3">
                <v-col cols="5" md="12">
                    <v-text-field
                        v-model="search"
                        label="Search"
                        single-line
                        hide-details
                        class="mt-3"
                        v-show="searchToogle"
                    ></v-text-field>
                </v-col>
                <v-btn icon @click="searchToogle =!searchToogle">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon @click="getDepartments">
                    <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>delete</v-icon>
                </v-btn>
                <v-btn icon @click="clearDepart">
                    <v-icon>clear</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card-title>

        <v-data-table
            :headers="headers"
            :items="departmens"
            :search="search"
            single-select
            headers-length="20"
            show-select
            item-key="codigo"
            class="amber lighten-5 mt-4 pt-1"
        ></v-data-table>
    </v-card>
</template>

<script>
    import axios from "axios";
    import { baseUrlApiDepartamento } from "../../../global";

    export default {
        name: "ListDepartments",
        data() {
            return {
                search: "",
                searchToogle: false,
                headers: [
                    {
                        text: "Código ",
                        value: "codigo",
                        align: "start",
                        width: 100,
                    },
                    { text: "Nome ", value: "nome" },
                    { text: "Descrição", value: "descricao" },
                ],
                departmens: [{}],
            };
        },
        methods: {
            getDepartments() {
                axios(`${baseUrlApiDepartamento}/listar`).then(
                    (res) => (this.departmens = res.data)
                );
            },
            clearDepart() {
                this.departmens = [{}];
            },
        },
        mounted() {
            this.getDepartments();
            setInterval(this.getDepartments, 30000);
        },
    };
</script>
    

<style>
    .card-title-font {
        font-family: lemonada-semibold;
        font-size: 1.5rem;
    }

    .card-art {
        border: solid 2px;
    }
</style>