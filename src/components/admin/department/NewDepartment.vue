<template>
    <div class="new-department group mt-0">
        <PageTitle class="mt-2 mb-1" name="Departamentos" />
        <b-form>
            <b-form-group label="Código">
                <b-form-input type="text" maxlength="4"></b-form-input>
            </b-form-group>
            <b-form-group label="Nome do departamento">
                <b-form-input type="text"></b-form-input>
            </b-form-group>
            <b-form-group label="Descrição">
                <b-form-textarea size="lg" rows="3"></b-form-textarea>
            </b-form-group>
            <div class="row ml-1 mr-1">
                <b-button class="mr-2" variant="success">
                    <span>
                        <i class="fa fa-save ml-2"></i>
                        Salvar
                    </span>
                </b-button>
                <b-button variant="danger" @click="loadDeptos()">
                    <span>
                        <i class="fa fa-times" />
                        Cancelar
                    </span>
                </b-button>
            </div>
        </b-form>
        <hr />
        <b-table striped :items="departamentos" :fields="fields">
            <template v-slot:cell(actions)="data">
                <b-button variant="warning" class="mr-2" @click="edit(data.item)">
                    <i class="fa fa-pencil"></i>
                </b-button>
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
        border-radius: 20px;
        box-shadow: 10px 10px 30px rgb(153, 151, 151);
        margin-top: 15px;
        padding: 40px;
    }
    .row {
        display: inline-flex;
        justify-content: space-between;
    }

    .row button {
        flex-grow: 1;
    }
</style>