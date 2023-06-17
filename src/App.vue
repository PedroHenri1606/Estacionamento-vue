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
        <li class="nav-item ">
          <router-link to="/"> <a class="nav-link active" aria-current="page" href="#"> Menu </a></router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Condutores
          </a>
          <ul class="dropdown-menu" >
            <router-link to='/condutor/listar'>         <li><a  class="dropdown-item">Listar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/condutor/cadastrar'>      <li><a  class="dropdown-item">Cadastrar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/condutor/editar'>         <li><a  class="dropdown-item">Editar</a></li></router-link>
            <router-link to='/condutor/desativar'>      <li><a  class="dropdown-item">Desativar</a></li></router-link>
            <router-link to='/condutor/ativar'>         <li><a  class="dropdown-item">Ativar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/condutor/deletar'>        <li><a  class="dropdown-item">Deletar</a></li></router-link>
          </ul>
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Veiculos
          </a>
          <ul class="dropdown-menu" >
            <router-link to='/veiculo/listar'>          <li><a  class="dropdown-item">Listar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/veiculo/cadastrar'>       <li><a  class="dropdown-item">Cadastrar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/veiculo/editar'>          <li><a  class="dropdown-item">Editar</a></li></router-link>
            <router-link to='/veiculo/desativar'>       <li><a  class="dropdown-item">Desativar</a></li></router-link>
            <router-link to='/veiculo/ativar'>          <li><a  class="dropdown-item">Ativar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/veiculo/deletar'>         <li><a  class="dropdown-item">Deletar</a></li></router-link>
          </ul>
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Movimentações
          </a>
          <ul class="dropdown-menu" >
            <router-link to='/movimentacao/listar'>     <li><a  class="dropdown-item"> Listar </a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/movimentacao/cadastrar'>  <li><a  class="dropdown-item">Cadastrar </a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/movimentacao/editar'>     <li><a  class="dropdown-item"> Editar </a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/movimentacao/finalizar'>  <li><a  class="dropdown-item"> Finalizar </a></li></router-link>
            <router-link to='/movimentacao/faturar'>    <li><a  class="dropdown-item"> Faturar </a></li></router-link>
          </ul>
        </li> 

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Configurações
          </a>
          <ul class="dropdown-menu" >
            <router-link to='/configuracao/cadastrar'>  <li><a  class="dropdown-item">Cadastrar</a></li></router-link>
            <li><hr class="dropdown-divider"></li>
            <router-link to='/configuracao/editar'>     <li><a  class="dropdown-item">Editar</a></li></router-link>
          </ul>
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
