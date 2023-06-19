<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Cadastrar Veiculo
            </div>
            <form>
                <div class="row">
                    <div class="row mb-4">
                        <label for="modelo" class="col dado">Modelo</label>
                            <div class="col-sm-10">
                                <input type="nome" class="form-control input">
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="placa" class="col dado">Placa</label>
                            <div class="col-sm-10">
                                <input type="cpf" class="form-control input">
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="cor" class="col dado">Cor</label>
                            <div class="col-sm-10">
                                <select class="form-select input" aria-label="Default select example">
                                    <option value="1">Amarelo</option>
                                    <option value="2">Azul</option>
                                    <option value="3">Bege</option>
                                    <option value="4">Branco</option>
                                    <option value="5">Cinza</option>
                                    <option value="6">Dourado</option>
                                    <option value="7">Grená</option>
                                    <option value="8">Laranja</option>
                                    <option value="9">Marrom</option>
                                    <option value="10">Prata</option>
                                    <option value="11">Preto</option>
                                    <option value="12">Rosa</option>
                                    <option value="13">Roxo</option>
                                    <option value="14">Verde</option>
                                    <option value="15">Vermelho</option>
                                    <option value="16">Fantasia</option>
                                </select>
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="tipoVeiculo" class="col dado">Tipo</label>
                            <div class="col-sm-10">
                                <select class="form-select input" aria-label="Default select example">
                                    <option value="1">Carro</option>
                                    <option value="2">Moto</option>
                                    <option value="3">Van</option>
                                </select>
                            </div>
                    </div>

                    <div class="row mb-4">
                        <label for="ano" class="col dado">Ano</label>
                            <div class="col-sm-10">
                                <input type="dado" class="form-control input">
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