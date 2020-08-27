<template>
    <div class="new-department group mt-1">
        <PageTitle class="mt-2 mb-1" title="Departamentos" />
        <v-form class="mt-4">
            <v-text-field label="Código" type="text" maxlength="4"></v-text-field>

            <v-text-field label="Nome do departamento" type="text"></v-text-field>

            <v-textarea label="Descrição" rows="6"></v-textarea>
            <div class="row ml-1 mr-1">
                <v-btn class="mr-2" variant="success">
                    <v-icon>save</v-icon>
                    <span>Salvar</span>
                </v-btn>
                <v-btn variant="danger" @click="loadDeptos()">
                    <v-icon>cancel</v-icon>
                    <span>Cancelar</span>
                </v-btn>
            </div>
        </v-form>
        <hr />
        <b-table striped :items="departamentos" :fields="fields">
            <template v-slot:cell(actions)="data">
                <v-btn variant="warning" class="mr-2" @click="edit(data.item)">
                    <i class="fa fa-pencil"></i>
                </v-btn>
            </template>
        </b-table>
        <hr />
        <hr />
        <Teste />
    </div>
</template>


<script>
    import PageTitle from "../../template/PageTitle";

    import axios from "axios";
    import { baseUrlApiDepartamento } from "../../../global";
    export default {
        name: "newDepartment",
        components: { PageTitle },
        data() {
            return {
                departamentos: [],
                fields: [
                    { key: "codigo", label: "Código", sortable: true },
                    { key: "nome", label: "Nome", sortable: true },
                    { key: "descricao", label: "Descrição", sortable: true },
                    { key: "actions", label: "", sortable: false },
                ],
            };
        },
        methods: {
            loadDeptos() {
                axios(`${baseUrlApiDepartamento}/listar`).then(
                    (res) => (this.departamentos = res.data)
                );
            },
        },
        mounted() {
            this.loadDeptos();
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
</style>