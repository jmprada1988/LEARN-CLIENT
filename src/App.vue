<template>
  <v-app class="grey lighten-4">
    <AppHeader></AppHeader>
    <v-content>
      <router-view></router-view>
    </v-content>  
  </v-app>
</template>

<script>
import AppHeader from './components/navigation/AppHeader'
export default {
  name: 'App',
  components: {
    AppHeader: AppHeader
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
