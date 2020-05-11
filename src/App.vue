<template>
  <div id="app">
    <app-header v-if="isLoggedIn" :routes="loggedInNavRoutes"></app-header>
    <app-header v-if="isLoggedOut" :routes="loggedOutNavRoutes"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/navigation/Header'
export default {
  name: 'App',
  components: {
    appHeader: appHeader
  },
  data() {
    return {
      persistentsNavRoutes: [
        {
          name: 'home',
          title: 'Home'  
        },
        {
          name: 'courses',
          title: 'Cursos'
        },
        {
          name: 'programs',
          title: 'Programas'
        }
      ],
      loggedInNavRoutes: [
        {
          name: 'userboard',
          title: 'User Dashboard'
        },
        {
          name: 'logout',
          title: 'Salir'
        },
        {
          name: 'home',
          title: 'Home'  
        },
        {
          name: 'courses',
          title: 'Cursos'
        },
        {
          name: 'programs',
          title: 'Programas'
        }
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Ingresar'
        },
        {
          name: 'register',
          title: 'Registrarme'
        },
        {
          name: 'home',
          title: 'Home'  
        },
        {
          name: 'courses',
          title: 'Cursos'
        },
        {
          name: 'programs',
          title: 'Programas'
        }
      ]
    }
  },
  computed: {
    isLoggedIn() {
      return localStorage.getItem('token')
    },
    isLoggedOut() {
      return !localStorage.getItem('token')
    }
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
