<template>
  <v-app class="grey lighten-4">
    <AppHeader></AppHeader>
    <v-content>
      <router-view></router-view>
    </v-content> 
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from './components/navigation/AppHeader'
import AppFooter from './components/navigation/AppFooter'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
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
