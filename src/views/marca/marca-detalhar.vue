<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Detalhar Marca
            </div>
            
            <form>
                <div class="row">
                    <div class="row mb-4">
                        <label for="nome" class="col dado">Marca</label>
                        <div class="col-sm-10">
                            <input type="text" :disabled="this.form === 'excluir' ? '' : disabled" class="form-control input" v-model="Marca.nome" >
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
import marcaClient from '@/client/marca.client';
import { Marca } from '@/model/marca';
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'MarcaDetalhar',
    data(){
        return {
            Marca: new Marca(),

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


    },
    methods: {
        
        findById(id: number){
            marcaClient.buscaPorId(id)
            .then(sucess => {
                this.Marca = sucess
            })
            .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        },

        onClickCadastrar(){
            marcaClient.cadastrar(this.Marca)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.Marca = new Marca;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },

        onClickDeletar(){
            marcaClient.deletar(this.Marca.id)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.Marca = new Marca;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },

        onClickEditar(){
        marcaClient.editar(this.Marca.id, this.Marca)
        .then(sucess => {
          this.Marca = new Marca()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

        onClickDesativar(){
            marcaClient.desativar(this.Marca)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.Marca = new Marca;
            })
            .catch(error =>{
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        },

        onClickAtivar(){
            marcaClient.ativar(this.Marca)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.Marca = new Marca;
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