<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/navigation/Header'
export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('login', {email: 'lein.davir@gmail.com', password: 'lein1234'})
  }
}
</script>

<style>
@import "/normalize-scss/sass/normalize/import-now";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
