<template >
    <v-card flat class="orange accent-1 card-art">
        <v-card-title class="my-3 pt-5">
            <span class="ml-6 mt-4 card-title-font">Departamentos</span>
            <!-- <v-textarea v-model="teste"></v-textarea> -->
            <v-spacer></v-spacer>
            <v-card-actions class="d-flex justify-end my-3">
                <v-col cols="5" md="12" class="ma-0 pa-0">
                    <v-text-field
                        v-model="search"
                        label="Search"
                        single-line
                        hide-details
                        class="mt-3"
                        v-show="searchToogle"
                        clearable
                    ></v-text-field>
                </v-col>
                <v-btn icon @click="searchButton">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon @click="getDepartments" class="light-green--text accent-3--text">
                    <v-icon>refresh</v-icon>
                </v-btn>
                <v-btn icon @click="edit" class="deep-orange--text accent-2--text">
                    <v-icon>edit</v-icon>
                </v-btn>
                <!-- <v-btn icon class="red--text darken-1--text">
                    <v-icon>delete</v-icon>
                </v-btn>-->
                <v-btn
                    :class="`${newBtnToogle ? 'red' : 'green'} darken-3 `"
                    class="ml-5 white--text"
                    fab
                    x-large
                    @click="$emit('newdepto')"
                >
                    <v-icon v-if="!newBtnToogle">mdi-plus</v-icon>
                    <v-icon v-else>clear</v-icon>
                </v-btn>
            </v-card-actions>
        </v-card-title>

        <v-data-table
            :headers="headers"
            :items="departmens"
            :search="search"
            v-model="selected"
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
        props: ["newBtnToogle"],
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
                selected: [],
            };
        },

        methods: {
            getDepartments() {
                axios(`${baseUrlApiDepartamento}/listar`).then(
                    (res) => (this.departmens = res.data)
                );
            },
            searchButton() {
                this.search = "";
                this.searchToogle = !this.searchToogle;
            },
            edit() {
                this.$emit("editClick", this.selected[0]);
            },
        },
        mounted() {
            this.getDepartments();
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