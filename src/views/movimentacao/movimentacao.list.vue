<template>

<div class="container tabela">
    <div class="row inicio">
        <div class="col"> ID       </div>
        <div class="col"> Condutor </div>
        <div class="col"> Veiculo </div>
        <div class="col"> Placa </div>
        <div class="col"> Data Entrada </div>
        <div class="col"> Situação </div>
    </div>

    <div class="row itens">
        <div class="col"> 1       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    <div class="row itens">
        <div class="col"> 2       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    <div class="row itens">
        <div class="col"> 3       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>
    
    <div class="row itens">
        <div class="col"> 4       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    <div class="row itens">
        <div class="col"> 5       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    <div class="row itens">
        <div class="col"> 6       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    <div class="row itens">
        <div class="col"> 7       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    <div class="row itens">
        <div class="col"> 8       </div>
        <div class="col"> Pedro </div>
        <div class="col"> XRE 300 </div>
        <div class="col"> RHT-5F18 </div>
        <div class="col"> 16/06/2023 </div>
        <div class="col"> Aberta </div>
    </div>

    
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>



</div>

</template>

<script lang="ts">


</script>

<style scoped>

.tabela{
    padding-top: 2vw;

}

.inicio{
    background-color: white;
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
    transition: 2s;
    height: 5vh;
    
}

.col{
    font-size: 1.5vw;
    font-weight: 100;
    font-family: 'Lato';
}

.itens:hover{
    transform: scale(1.05);
    transition: 2s;
}

.page-link{
    width: 2vw;
    color: black;
}

.pagination{
    margin-top: 5vw;
    justify-content: center;
}

</style>