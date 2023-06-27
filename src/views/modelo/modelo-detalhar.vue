<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Detalhar Modelo
            </div>
            
            <form>
                <div class="row">

                    <div class="row mb-4">
                        <label for="nome" class="col dado">Modelo</label>
                        <div class="col-sm-10">
                            <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control input" v-model="modelo.nome">
                        </div>
                    </div>

                    <div class="row mb-4">
                        <label for="nome" class="col dado">Marca</label>
                        <div class="col-sm-10">
                          <select class="form-select" v-model="modelo.marca">
                            <option v-for="item in marcaList" :key="item.id" :value="item">{{ item.nome }}</option>
                          </select>
                        </div>
                    </div>
                </div>
            </form>
            
            <div v-if="mensagem.ativo" class="row">
                <div class="col-md-12 text-start">
                    <div :class="mensagem.css" role="alert">
                    <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            </div>


            <div>
                <router-link type="button" class="btn btn-outline-success botao" 
                    to="/marca/listar">Voltar
                </router-link>
                <button v-if="this.form === undefined" type="button" class="btn btn-outline-success botao"
                    @click="onClickEditar()">
                        Salvar
                </button>
                <button v-if="this.form === undefined" type="button" class="btn btn-outline-success botao"
                    @click="onClickDesativar()">
                        Desativar
                </button>
                <button v-if="this.form === undefined" type="button" class="btn btn-outline-success botao"
                    @click="onClickAtivar()">
                        Ativar
                </button>
                <button v-if="this.form === undefined" type="button" class="btn btn-outline-success botao"
                    @click="onClickDeletar()">
                        Excluir
                </button>
            </div>
        </div>
    </div>     
</template>
    
<script lang="ts">

import modeloClient from '@/client/modelo.client';
import marcaClient from '@/client/marca.client';
import { Modelo } from '@/model/modelo';
import { defineComponent } from 'vue';
import { Marca } from '@/model/marca';

export default defineComponent({
    name: 'CondutorDetalhar',
    data(){
        return {
            marcaList: new Array<Marca>(),
            modelo: new Modelo(),

            mensagem:{
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        }
    },
    computed: {
        id(){
            return this.$route.query.id
        },
        form(){
            return this.$route.query.form
        }
    },
    mounted(){

        if(this.id !== undefined){
            this.findById(Number(this.id));
        }
        this.findAllMarcas();

    },
    methods: {
        
        findAllMarcas(){
            marcaClient.listarTodos()
            .then(sucess => {
                this.marcaList = sucess
            })
            .catch(error => {
                console.log(error);
            })
        },
        
        findById(id: number){
            modeloClient.buscaPorId(id)
            .then(sucess => {
                this.modelo = sucess
            })
            .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },

        onClickCadastrar(){
            modeloClient.cadastrar(this.modelo)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.modelo = new Modelo;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },

        onClickDeletar(){
            modeloClient.deletar(this.modelo.id)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.modelo = new Modelo;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },

        onClickEditar(){
            modeloClient.editar(this.modelo.id, this.modelo)
            .then(sucess => {
            this.mensagem.ativo = true;
            this.mensagem.mensagem = sucess;
            this.mensagem.titulo = "Parabens. ";
            this.mensagem.css = "alert alert-success alert-dismissible fade show";

            this.modelo = new Modelo()
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

        onClickDesativar(){
            modeloClient.desativar(this.modelo)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.modelo = new Modelo;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },

        onClickAtivar(){
            modeloClient.ativar(this.modelo)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.modelo = new Modelo;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },
    }
})

    
</script>

    
<style scoped>
    
form{
    padding-top: 5%;
}

form{
    padding-top: 5%;
}

.tabela{
    margin-top: 2vw;
    background-color: WHITE;
    height: 75vh;
    border-radius: 6px;
}

.input{
    width: 40%;
    height: 100%;
}
 
.opcoes{
    align-items: center;
    text-align: center;
    color: #00000033;
    padding: 2vw;
    font-size: 3vh;
    font-weight: bolder;
    text-align: left;
}

.dado{
    background-color: white;
    align-items: center;
    color: #00000033;
    padding-left: 5vw;
    font-size: 3vh;
    font-weight: bolder;
    text-align: left;
}

.botao{
    font-weight: bolder;
    margin-top: 16vw;
    font-size: 2.5vh;
    transition: 1s;
    margin-right: 2.5vh;
}

</style>