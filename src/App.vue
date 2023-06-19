<template>

<div class="icone">
<img src="/estacionamento.png">
</div>

<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
       
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
    
      <ul class="navbar-nav">


        <li class="nav-item">
          <router-link to='/condutor/listar'>
            <a class="nav-link active">Condutores</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to='/veiculo/listar'>
            <a class="nav-link active">Veiculos</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to='/marca/listar'>
            <a class="nav-link active">Marcas</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to='/movimentacao/listar'>
            <a class="nav-link active">Movimentações</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to='/configuracao/cadastrar'>
            <a class="nav-link active">Configurações</a>
          </router-link>
        </li>
    
      </ul>   
    </div>
  </div>
</nav>

<router-view/>

</template>

<style lang="scss">
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #bbc1d254;
  width: 100vw;
  height: 100vh;
}

nav {
  background-color: white;
  font-weight: bolder;
  font-size: 20px;
  

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .topo{
    text-align: center;
  }
}

img {
  height: 8vh;
 
}

.icone{

  background-color: white;
}
</style>
