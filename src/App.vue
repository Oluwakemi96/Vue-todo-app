<template>
  <div class="container">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './components/NavBar.vue';

  export default {
    name: 'App',
    components:{
      NavBar
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  body{
    background-color: #f4f4f4;
  }

#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1, p{
  margin: 0;
  padding: 0;
}

a {
  color: black;
  text-decoration:none;
}

a:hover{
  cursor: pointer;
  background-color:black;
  color: white;
  padding: 8px;
  border-radius: 3px;
}

.container{
  max-width: 800px;
  margin: 0 auto;
  width: calc(100vw - 64px);
}
</style>
