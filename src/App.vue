<template>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
   
    <img src="estacionamento.png">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menu</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Condutores
          </a>
          <ul class="dropdown-menu" >
            <li><a  class="dropdown-item" href="#">Movimentações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Condutores</a></li>
            <li><a  class="dropdown-item" href="#">Veiculos</a></li>
            <li><a  class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Marca</a></li>
            <li><a  class="dropdown-item" href="#">Modelo</a></li>
          </ul>
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Veiculos
          </a>
          <ul class="dropdown-menu" >
            <li><a  class="dropdown-item" href="#">Movimentações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Condutores</a></li>
            <li><a  class="dropdown-item" href="#">Veiculos</a></li>
            <li><a  class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Marca</a></li>
            <li><a  class="dropdown-item" href="#">Modelo</a></li>
          </ul>
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Movimentações
          </a>
          <ul class="dropdown-menu" >
            <li><a  class="dropdown-item" href="#">Movimentações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Condutores</a></li>
            <li><a  class="dropdown-item" href="#">Veiculos</a></li>
            <li><a  class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Marca</a></li>
            <li><a  class="dropdown-item" href="#">Modelo</a></li>
          </ul>
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Configurações
          </a>
          <ul class="dropdown-menu" >
            <li><a  class="dropdown-item" href="#">Movimentações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Condutores</a></li>
            <li><a  class="dropdown-item" href="#">Veiculos</a></li>
            <li><a  class="dropdown-item" href="#">Configurações</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a  class="dropdown-item" href="#">Marca</a></li>
            <li><a  class="dropdown-item" href="#">Modelo</a></li>
          </ul>
        </li> 

      </ul>


    </div>
  </div>
</nav>



</template>

<style lang="scss">
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #bbc1d2;
  width: 100vw;
  height: 100vh;
}

nav {
  padding: 30px;
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
  padding-right: 10vh;
}
</style>
