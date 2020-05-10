<template>
  <div id="app">
    <app-header v-if="isLoggedIn" :routes="loggedInNavRoutes"></app-header>
    <app-header v-if="isLoggedOut" :routes="getWelcomeNavRoutes"></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from './components/navigation/Header'
import {mapGetters, mapActions} from 'vuex'
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
          title: () => 'Ingreso como ' + this.currenUser.name
        },
        {
          name: 'logout',
          title: 'Salir'
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
        }
      ]
    }
  },
  
  computed: {
    ...mapGetters('auth',['isLoggedIn', 'isLoggedOut']),
    getWelcomeNavRoutes: function() {
      return [...this.persistentsNavRoutes, ...this.loggedOutNavRoutes]
    },
    getLoggedInNavRoutes: function() {
      return [...this.persistentsNavRoutes, this.loggedInNavRoutes]
    }
  },
  methods: {
    ...mapActions('auth', ['login', 'logout', 'register'])
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
