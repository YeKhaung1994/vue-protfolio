<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HomePage></HomePage>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/views/index.vue'
import '@fortawesome/fontawesome-free/css/all.min.css';
export default {
  name: 'App',
  components: {
    //HelloWorld,
    HomePage
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
  margin-top: 60px;
}
</style>
