<template>
    <v-data-table
        :headers="headers"
        :items="categories"
        sort-by="calories"
        class="elevation-1 ma-3 pt-5"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title class="table-title-custom ma-4">Categorias</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            <v-icon>mdi-plus</v-icon>
                            <span>Nova Categoria</span>
                        </v-btn>
                        <!-- <v-btn @click="getCategories">Teste</v-btn> -->
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <!-- CODIGO -->
                                    <v-col cols="12" md="3">
                                        <v-text-field
                                            :disabled="editedIndex!=-1"
                                            v-model="editedItem.codigo"
                                            label="Código"
                                            maxlength="6"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <!-- NOME -->
                                    <v-col cols="12" md="9">
                                        <v-text-field
                                            v-model="editedItem.nome"
                                            label="Nome da Categoria"
                                            :rules="[rules.required]"
                                        ></v-text-field>
                                    </v-col>
                                    <!-- OBSERVAÇÃO -->
                                    <v-col cols="12">
                                        <v-textarea
                                            v-model="editedItem.obs"
                                            rows="3"
                                            label="Observação"
                                        ></v-textarea>
                                    </v-col>
                                    <!-- DEPARTAMENTO -->
                                    <v-col cols="12">
                                        <v-combobox
                                            v-model="editedItem.departamento"
                                            label="Departamento"
                                            :rules="[rules.required]"
                                            :items="departamentosCombo"
                                        ></v-combobox>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions class="mr-4 py-4">
                            <v-spacer></v-spacer>
                            <v-btn color="red darken-1 white--text" @click="close">
                                <v-icon>cancel</v-icon>
                                <span class="ml-2">Cancel</span>
                            </v-btn>
                            <v-btn color="green darken-1 white--text" @click="save">
                                <v-icon>save</v-icon>
                                <span class="ml-2 mr-3">Save</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <!-- <template v-slot:item.actions="{ item }"> -->
        <template v-slot:item.actions="{item}">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
            <v-btn color="warning" class="ma-6" fab @click="getCategories">
                <v-icon>refresh</v-icon>
            </v-btn>
        </template>
    </v-data-table>
</template>

<script>
    import axios from "axios";
    import { baseUrlApiCategoria, baseUrlApiDepartamento } from "../../../global";
    export default {
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: "Código",
                    align: "start",
                    sortable: false,
                    value: "codigo",
                },
                { text: "Nome", value: "nome" },
                { text: "Observação", value: "obs" },
                { text: "Departamento", value: "departamento" },
                { text: "Actions", value: "actions", sortable: false },
            ],
            categories: [],
            editedIndex: -1,
            editedItem: {
                codigo: "",
                nome: "",
                obs: "",
                departamento: "",
                codDpto: "",
            },
            defaultItem: {
                codigo: "",
                nome: "",
                obs: "",
                departamento: "",
                codDpto: "",
            },
            departamentos: [],
            departamentosCombo: [],
            rules: {
                required: (value) => !!value || `Campo requerido`,
            },
        }),

        computed: {
            formTitle() {
                return this.editedIndex === -1 ? "New Item" : "Edit Item";
            },
        },

        watch: {
            dialog(val) {
                val || this.close();
            },
        },

        created() {
            this.getDepartments();
            this.getCategories();
        },

        methods: {
            getCategories() {
                axios(`${baseUrlApiCategoria}/listar`).then((res) => {
                    const result = res.data;
                    result.forEach((e) => {
                        this.bindCategoryDepart(e);
                    });
                    this.categories = result;
                });
            },

            getDepartments() {
                axios(`${baseUrlApiDepartamento}/listar`).then((res) => {
                    this.departamentos = res.data;
                    this.departamentosCombo = res.data.map(
                        (e) => `${e.codigo} - ${e.nome}`
                    );
                });
            },

            bindCategoryDepart(element) {
                for (let i = 0; i < this.departamentosCombo.length; i++) {
                    if (this.departamentosCombo[i].startsWith(element.codDpto)) {
                        return (element.departamento = this.departamentosCombo[i]);
                    }
                }
            },

            // CRUD
            editItem(item) {
                this.editedIndex = this.categories.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true;
            },

            deleteItem(item) {
                const index = this.categories.indexOf(item);
                confirm("Tem certeza que quer cancelar esse item?") &&
                    this.categories.splice(index, 1);
            },

            close() {
                this.dialog = false;
                this.$nextTick(() => {
                    this.editedItem = Object.assign({}, this.defaultItem);
                    this.editedIndex = -1;
                });
            },

            save() {
                if (this.editedIndex > -1) {
                    if (
                        !(this.editedItem.codigo,
                        this.editedItem.nome,
                        this.editedItem.departamento)
                    ) {
                        this.$toasted.global.defaultAlert(
                            "Por favor preencha os campos, requeridos para salvar"
                        );
                    } else {
                        this.dbSave(this.editedItem);
                        Object.assign(
                            this.categories[this.editedIndex],
                            this.editedItem
                        );
                    }
                } else {
                    if (
                        (this.editedItem.codigo,
                        this.editedItem.nome,
                        this.editedItem.departamento)
                    ) {
                        this.dbSave(this.editedItem);
                    } else {
                        this.$toasted.global.defaultAlert(
                            "Por favor preencha os campos, requeridos para salvar"
                        );
                    }
                }
                this.close();
            },

            dbSave(payload) {
                payload.codDpto = payload.departamento.split("-")[0].trim();

                axios.post(`${baseUrlApiCategoria}/salvar`, payload).then((res) => {
                    console.log(res.data);
                    this.$toasted.global.defaultSuccess(
                        `Categoria com o código:${res.data[0].codigo}, salva com sucesso`
                    );
                });
                // .catch((err) => this.$toasted.global.defaultError(err));
            },
        },
    };
</script>


<style>
    .table-title-custom {
        font-family: lemonada-semibold;
        font-size: 1.8rem;
    }
</style>