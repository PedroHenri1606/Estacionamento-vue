<template>

<div class="container tabela">
    <div class="container text-center">
        <div class="row align-items-start">
            <div class="col opcoes">
                Lista de Condutores
            </div>
            <div class="col opcoes">  
                <select class="form-select" aria-label="Default select example">
                    <option selected>Listar por</option>
                    <option value="1">Ativos</option>
                    <option value="2">Desativados</option>
                </select>
            </div>
            <div class="col opcoes">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Informe o Id" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
            <div class="col opcoes">
                <router-link to='/condutor/cadastrar'>
                    <button type="button" class="btn btn-success "><img src="/adicionar.usuario.png" class="botao-cadastrar">Adicionar Condutor</button>
                </router-link>
            </div>
        </div>
    </div>

    <div class="row inicio">
        <div class="col"> ID       </div>
        <div class="col"> Situação </div>
        <div class="col"> Nome </div>
        <div class="col"> CPF </div>
        <div class="col"> Telefone </div>
        <div class="col"> Detalhes </div>   
    </div>

    <div v-for="item in condutorList" :key="item.id">
        <div class="row itens">     
            <div class="col">
                {{ item.id }}
            </div>
            <div v-if="item.ativo" class="col ativo"> 
                <span> Ativo </span>
            </div>
            <div v-if="!item.ativo" class="col inativo"> 
                <span> Inativo </span>
            </div>
            <div class="col">
                {{ item.nome }}
            </div>
            <div class="col">
                {{ item.cpf }}
            </div>
            <div class="col">
                {{ item.telefone }}
            </div>
            <div class="col">
            <div class="btn-group col" role="group" aria-label="Basic mixed styles example">
                <router-link  :to="{name: 'condutor-detalhar', query: {id: item.id}}">
                    <button type="submit" class="btn btn-outline-success botao">Detalhar</button>
                </router-link>
            </div>
        </div>
    </div>

    </div>
</div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

    import { Condutor } from '@/model/condutor';
    import condutorClient from '@/client/condutor.client';

    export default defineComponent({
        name: 'CondutorLista',
        data() {
            return {
                condutorList : new Array<Condutor>()
            }
        },
        mounted(){
            this.findAll();
        },
        methods: {

            findAll(){
                condutorClient.listarTodos()
                .then(sucess => {
                    this.condutorList = sucess
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    });

</script>

<style scoped>

.tabela{
    margin-top: 2vw;
    background-color: WHITE;
    height: 75vh;
    border-radius: 6px;

}

.inicio{
    background-color: rgba(128, 128, 128, 0.144);
    color: grey;
    font-family: 'Lato';
    text-align: center;
    align-items: center;
    font-size: 10px;
    font-weight: bolder;
    border-radius: 5px;
    margin: 2vh;
    height: 5vh;
  
}

.itens{
    background-color: white;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin: 2vh;
    
    height: 5vh;
    
}

.col{
    font-size: 15px;
    font-weight: 100;
    font-family: 'Lato';
}


.page-link{
    width: 2vw;
    color: black;
}

.pagination{
    margin-top: 5vw;
    justify-content: center;
}

.opcoes{
    background-color: white;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    margin-top: 2vw;
    font-size: 2vh;
    font-weight: bolder;
}


    .inativo{
        color: red;
        font-weight: bolder;
        background-color: rgba(255, 0, 0, 0.349);
        border-radius: 5px;
    }

    .ativo{
        color: green;
        font-weight: bolder;
        background-color: rgba(0, 128, 0, 0.349);
        border-radius: 5px;
    }

.botao-cadastrar{
    height: 2.5vh;
    align-items: center;
    margin-right: 1vh;
}

</style>