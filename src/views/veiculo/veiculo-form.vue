<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Cadastrar Veiculo
            </div>
            <form>
                <div class="row">
                    <div class="row mb-4">
                        <label for="nome" class="col dado">Modelo</label>
                        <div class="col-sm-10">
                          <select class="form-select" v-model="veiculo.modelo">
                            <option v-for="item in modeloList" :key="item.id" :value="item">{{ item.nome }}</option>
                          </select>
                        </div>
                    </div>

                    <div class="row mb-4">
                        <label for="placa" class="col dado">Placa</label >
                            <div class="col-sm-10">
                                <input type="cpf" class="form-control input" v-model="veiculo.placa">
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="cor" class="col dado">Cor</label>
                            <div class="col-sm-10">
                                <select class="form-select input" aria-label="Default select example" v-model="veiculo.cor">
                                    <option value="AMARELO">AMARELO</option>
                                    <option value="AZUL">AZUL</option>
                                    <option value="BEGE">BEGE</option>
                                    <option value="BRANCA">BRANCA</option>
                                    <option value="CINZA5">CINZA</option>
                                    <option value="DOURADA">DOURADA</option>
                                    <option value="GRENÁ">GRENÁ</option>
                                    <option value="LARANJA">LARANJA</option>
                                    <option value="MARROM">MARROM</option>
                                    <option value="PRATA">PRATA</option>
                                    <option value="PRETA">PRETA</option>
                                    <option value="ROSA">ROSA</option>
                                    <option value="ROXA">ROXA</option>
                                    <option value="VERDE">VERDE</option>
                                    <option value="VERMELHA">VERMELHA</option>
                                    <option value="FANTASIA">FANTASIA</option>
                                </select>
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="tipoVeiculo" class="col dado">Tipo</label>
                            <div class="col-sm-10">
                                <select class="form-select input" aria-label="Default select example" v-model="veiculo.tipoVeiculo">
                                    <option value="Carro">Carro</option>
                                    <option value="Van">Van</option>
                                    <option value="Moto">Moto</option>
                                </select>
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="ano" class="col dado">Ano</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control input"  v-model="veiculo.ano">
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
                    to="/veiculo/listar">Voltar
                </router-link>
                <button v-if="this.form === undefined " type="button" class="btn btn-outline-success botao"
                    @click="onClickCadastrar()">
                        Cadastrar
                </button>
            </div>
        </div>
    </div>    
</template>
    
<script lang="ts">
    
import modeloClient from '@/client/modelo.client';
import { Modelo } from '@/model/modelo';
import { Veiculo } from '@/model/veiculo';
import veiculoClient from '@/client/veiculo.client';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VeiculoFormulario',
    data(){
        return {
            veiculo: new Veiculo,
            modeloList: new Array<Modelo>(),

            mensagem: {
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
        this.findAllModelos();
    },
    methods: {

        findAllModelos(){
            modeloClient.listarTodos()
            .then(sucess => {
                this.modeloList = sucess
            })
            .catch(error => {
                console.log(error);
            })
        },

        onClickCadastrar(){
            veiculoClient.cadastrar(this.veiculo)
            .then(sucess => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = sucess;
                this.mensagem.titulo = "Parabens. ";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.veiculo = new Veiculo
            })
            .catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            });
        }
    }
})
    
</script>
    
<style scoped>
    
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
    margin-top: 4%;
    font-size: 2.5vh;
    transition: 1s;
}
</style>