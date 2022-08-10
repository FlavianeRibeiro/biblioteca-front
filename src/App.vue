<template>
  <MenuLateral/>
  <main class="main-content position-relative border-radius-lg ">
    <NavBar/>
    <div class="container-fluid py-4">
      <CardGrafc/>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </main>

</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from './components/NavBar'
import MenuLateral from './components/MenuLateral'
import CardGrafc from './components/CardGrafc'
export default {
  name: 'HomeView',
  components: {
    HelloWorld, NavBar, MenuLateral, CardGrafc
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
