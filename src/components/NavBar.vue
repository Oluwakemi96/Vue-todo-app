<template>
  <div class="navbar-body">
    <div class="logo">
      TodoApp
    </div>

    <ul class="nav-list">
      <li>
        <router-link to="/">Home</router-link>   
      </li>
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
      <li>
        <router-link to="/store">Store</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'NavBar'

  }
</script>

<style  scoped>
  

.navbar-body{
  display: flex;
  justify-content: space-between;
  /* padding-inline: 32px; */
  align-items: center;
  padding: 16px 32px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}

.nav-list{
  display: flex;
  gap: 20px;
  list-style: none;
}

.logo{
  font-weight: 600;
}



</style>