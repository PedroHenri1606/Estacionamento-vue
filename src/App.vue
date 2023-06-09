<template>
<nav class="navbar navbar-expand-lg bg-warning nav-underline">
  <div class="container-fluid">
   
    <a class="navbar-brand" href="#">SpeedPark</a>
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
            Itens
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

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-dark" type="submit">Buscar</button>
      </form>

    </div>
  </div>
</nav>



</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .topo{
    text-align: center;
  }
}
</style>
