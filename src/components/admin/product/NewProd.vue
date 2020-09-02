<template>
    <v-container fluid class="group mt-1">
        <PageTitle title="Cadastro de novo Produto" class="mt-9" />
        <v-form>
            <v-row>
                <v-col cols="12" sm="3">
                    <v-text-field label="Código do produto" v-model="form.codigo"></v-text-field>
                </v-col>
                <v-col cols="12" sm="9">
                    <v-text-field label="Descrição Resumida" v-model="form.descricaoResumida"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-combobox
                        label="Categoria(s)"
                        v-model="form.categoria"
                        :items="categories"
                        clearable
                        chips
                        multiple
                    ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        label="Preço"
                        prepend-icon="local_offer"
                        v-model="form.descricaoResumida"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        label="Moeda"
                        prepend-icon="local_atm"
                        v-model="form.descricaoResumida"
                    ></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea label="Descrição completa" v-model="form.descricaoCompleta"></v-textarea>
                </v-col>
            </v-row>
        </v-form>
        <v-row>
            <v-col>
                <vue-dropzone
                    ref="dropzone"
                    id="drop1"
                    :options="dropOptions"
                    @vdropzone-complete="afterComplete"
                    v-on:vdropzone-sending="sendingEvent"
                    :useCustomSlot="true"
                >
                    <div class="dropzone-custom-content">
                        <h3 class="dropzone-custom-title">
                            <v-icon x-large class="mr-4">cloud_upload</v-icon>Faça o upload da imagem do produto
                        </h3>
                        <div class="subtitle">...arrastando ou clicando para selecionar um arquivo</div>
                    </div>
                </vue-dropzone>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import vueDropzone from "vue2-dropzone";
    import PageTitle from "../../template/PageTitle";
    import axios from "axios";
    import { baseUrlApiCategoria } from "../../../global";

    export default {
        name: "newProd",
        data: () => ({
            selectImg: null,
            dropOptions: {
                url: "http://localhost:8999/upload",
                maxFilesize: 200000, // MB
                maxFiles: 5,
                addRemoveLinks: true,
            },
            form: {
                codigo: "",
                descricaoResumida: "",
                descricaoCompleta: "",
                preco: "",
                fotoGrande: "",
                fotoPequena: "",
            },
            categories: [],
        }),
        components: {
            vueDropzone,
            PageTitle,
        },
        methods: {
            removeAllFiles() {
                this.$refs.dropzone.removeAllFiles();
            },
            sendingEvent(file) {
                let data = new FormData();
                data.append("id", "1");
                data.append("productImage", file);

                let config = {
                    method: "post",
                    url: "http://localhost:8999/upload",
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                    data: data,
                };

                axios(config)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },

            afterComplete() {
                // console.log(file);
            },

            getCategories() {
                const result = [];
                axios(`${baseUrlApiCategoria}/listar`).then((res) => {
                    res.data.forEach((e) => {
                        result.push(`${e.codigo} - ${e.nome}`);
                    });
                });
                this.categories = result;
            },
        },
        mounted() {
            this.getCategories();
        },
    };
</script>

<style>
</style>