<template>
    <div class="new-department group mt-1">
        <CloseCross routeTo="/admin" />
        <PageTitle class="mt-2" title="Departamentos" />
        <v-form class="mt-4 my-2 black--text">
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="5">
                        <v-text-field
                            v-model="department.codigo"
                            label="Código"
                            type="text"
                            maxlength="4"
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
                    <v-btn color="red lighten-1 white--text">
                        <v-icon>cancel</v-icon>
                        <span class="ml-2">Cancelar</span>
                    </v-btn>
                </div>
            </v-container>
        </v-form>
        <hr class="mt-5 my-6" />

        <ListDepartments />
    </div>
</template>


<script>
    import PageTitle from "../../template/PageTitle";
    import CloseCross from "../../template/CloseCross";
    import ListDepartments from "./ListDepartments";

    import axios from "axios";
    import { baseUrlApiDepartamento } from "../../../global";
    export default {
        name: "newDepartment",
        components: { PageTitle, CloseCross, ListDepartments },
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
            };
        },
        methods: {
            async saveNewDpto() {
                if (
                    !this.department.codigo ||
                    !this.department.nome ||
                    !this.department.descricao
                ) {
                    this.$toasted.global.defaultAlert(
                        "Por-favor, preencha todas as informações necessárias"
                    );
                }

                await axios
                    .post(`${baseUrlApiDepartamento}/salvar`, this.department)
                    .then((res) => console.log(res.data));
            },
        },
    };
</script>

  
<style>
    .group {
        background: lemonchiffon;
        box-shadow: 10px 10px 30px rgb(153, 151, 151);
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