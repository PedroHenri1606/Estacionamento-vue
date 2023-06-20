<template>
    <div class="container tabela">
        <div class="container text-center">
            <div class="opcoes">
                Cadastrar Configuração
            </div>

            <form>
                <div class="row">
                    <label for="valorHora" class="col-2 col-sm-2 dado mb-4">Valor Hora</label>     
                        <div class="col-2 col-sm-3">
                            <input type="number" class="form-control input">
                        </div>    
                    <label for="valorMinutoMulta" class="col-2 col-sm-3 dado">Valor Minuto Multa</label>
                        <div class="col-2 col-sm-3">
                             <input type="number" class="form-control input">
                        </div>
                </div>
                    
                <div class="row">
                    <label for="abertura" class="col-2 col-sm-2 dado mb-4">Abertura</label>     
                        <div class="col-2 col-sm-3">
                            <input type="time" class="form-control input">
                        </div>    
                    <label for="fechamento" class="col-2 col-sm-3 dado">Fechamento</label>
                        <div class="col-2 col-sm-3">
                             <input type="time" class="form-control input">
                        </div>
                </div>

                    
                <div class="row">
                    <label for="tempoParaDesconto" class="col-2 col-sm-3 dado mb-4">Tempo para Desconto</label>     
                        <div class="col-2 col-sm-2">
                            <input type="time" class="form-control input">
                        </div>    
                    <label for="tempoDeDesconto" class="col-2 col-sm-3 dado">Tempo de Desconto</label>
                        <div class="col-2 col-sm-3">
                             <input type="time" class="form-control input">
                        </div>
                </div>

                <div class="row">
                    <label for="gerarDesconto" class="col-2 col-sm-3 dado mb-4">Gerar Desconto</label>     
                        <div class="col-2 col-sm-2 form-switch">
                            <input class="form-check-input dado" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        </div>    
                    <label for="vagasMoto" class="col-2 col-sm-3 dado">Vagas Moto</label>
                        <div class="col-2 col-sm-3">
                             <input type="number" class="form-control input">
                        </div>
                </div>

                <div class="row">
                    <label for="vagasCarro" class="col-2 col-sm-2 dado mb-4">Vagas Carro</label>     
                        <div class="col-2 col-sm-3">
                            <input type="number" class="form-control input">
                        </div>    
                    <label for="vagasVan" class="col-2 col-sm-3 dado">Vagas Van</label>
                        <div class="col-2 col-sm-3">
                             <input type="number" class="form-control input">
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
    color: #00000033;
    padding-left: 4vw;
    font-size: 2.5vh;
    font-weight: bolder;
    text-align: left;
}

.botao{
    font-weight: bolder;
    margin-top: 8%;
    font-size: 2.5vh;
    transition: 1s;
}
</style>