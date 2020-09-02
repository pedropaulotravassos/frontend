<template>
    <div class="new-department group mt-1">
        <!-- <CloseCross routeTo @click="formShow = !formShow" /> -->
        <!-- <PageTitle class="mt-2" title="Departamentos" /> -->
        <v-form class="mt-4 my-2 black--text" v-show="formShow">
            <v-container fluid>
                <v-row class="mt-10">
                    <v-col cols="12" md="5">
                        <v-text-field
                            v-model="department.codigo"
                            label="Código"
                            type="text"
                            maxlength="4"
                            :disabled="editMode"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="7">
                        <v-text-field
                            v-model="department.nome"
                            label="Nome do departamento"
                            type="text"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-textarea v-model="department.descricao" label="Descrição" rows="4"></v-textarea>
                    </v-col>
                </v-row>

                <div class="row ml-2 mr-2">
                    <v-btn class="mr-2" color="success" @click="saveNewDpto">
                        <v-icon>save</v-icon>
                        <span class="ml-2">Salvar</span>
                    </v-btn>
                    <v-btn color="red lighten-1 white--text" @click="cancel">
                        <v-icon>cancel</v-icon>
                        <span class="ml-2">Cancelar</span>
                    </v-btn>
                </div>
            </v-container>
        </v-form>
        <!-- <hr class="mt-5 my-6" /> -->

        <ListDepartments v-on:editClick="edit" v-on:newdepto="newBtn" :newBtnToogle="formShow" />
    </div>
</template>


<script>
    // import PageTitle from "../../template/PageTitle";
    // import CloseCross from "../../template/CloseCross";
    import ListDepartments from "./ListDepartments";

    import axios from "axios";
    import { baseUrlApiDepartamento } from "../../../global";
    export default {
        name: "newDepartment",
        components: { ListDepartments },
        data() {
            return {
                rules: {
                    required: (value) => !!value || `Campo requerido`,
                },
                department: {
                    codigo: "",
                    nome: "",
                    descricao: "",
                },
                editMode: false,
                formShow: false,
            };
        },
        methods: {
            saveNewDpto() {
                if (
                    !this.department.codigo ||
                    !this.department.nome ||
                    !this.department.descricao
                ) {
                    this.$toasted.global.defaultAlert(
                        "Por-favor, preencha todas as informações necessárias"
                    );
                }

                axios
                    .post(`${baseUrlApiDepartamento}/salvar`, this.department)
                    .then((res) => {
                        this.$toasted.global.defaultSuccess(res.data);
                    });
            },
            edit(value) {
                this.editMode = true;
                this.formShow = true;
                this.department = value;
            },

            cancel() {
                this.editMode = false;
                this.formShow = false;
                this.department = {};
            },

            newBtn() {
                this.editMode = false;
                this.department = {};
                this.formShow = !this.formShow;
            },
        },
    };
</script>

  
<style>
    .group {
        background: lemonchiffon;
        /* box-shadow: 10px 10px 30px rgb(153, 151, 151); */
        margin-top: 15px;
        padding: 40px;
    }

    .row button {
        flex-grow: 1;
    }
    .toastedWarning {
        background-color: yellow;
    }
</style>