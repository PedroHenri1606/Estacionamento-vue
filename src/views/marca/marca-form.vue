<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Cadastrar Marca
            </div>
            <form>
                <div class="row">
                    <div class="row mb-4">
                        <label for="inputEmail3" class="col dado">Nome</label>
                        <div class="col-sm-10">
                        <input type="nome" class="form-control input" id="input">
                        </div>
                    </div>
                    </div>
            </form>
            <div>
                <button type="submit" class="btn btn-outline-success botao">Cadastrar</button>
            </div>
        </div>
    </div>    
</template>
    
<script lang="ts">
    
    
</script>
    
<style scoped>
    
form{
    padding-top: 10%;
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
    margin-top: 20%;
    font-size: 2.5vh;
    transition: 1s;
}
</style>