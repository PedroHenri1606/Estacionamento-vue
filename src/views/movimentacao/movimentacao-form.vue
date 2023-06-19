<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Cadastrar Movimentação
            </div>
            <form>
                <div class="row">
                    <div class="row mb-4">
                        <label for="placa" class="col dado">Cliente</label>
                            <div class="col-sm-10">
                                <select class="form-select input" aria-label="Default select example">
                                    <option value="1">Pedro Henrique</option>
                                    <option value="2">Pedro Henrique</option>
                                    <option value="3">Pedro Henrique</option>
                                </select>
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="modelo" class="col dado">Veiculo</label>
                            <div class="col-sm-10">
                                <select class="form-select input" aria-label="Default select example">
                                    <option value="1">XRE 300</option>
                                    <option value="2">300z</option>
                                    <option value="3">Africa Twin 1100 Adventure</option>
                                </select>
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
    margin: 0%;
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
    padding-right: 0vw;
    padding-left: 5vw;
    font-size: 3vh;
    font-weight: bolder;
    text-align: left;
}

.botao{
    font-weight: bolder;
    margin-top: 21%;
    font-size: 2.5vh;
    transition: 1s;
}
</style>