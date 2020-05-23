<template>
  <v-row no-gutters>
    <v-col
      v-for="(bar, i) in bars"
      :key="i"
      cols="12"
      sm="12"
      lg="12"
      class="my-4"
    >
      <v-card color="grey lighten-4" flat height="0px">
        <v-toolbar :color="bar.class" :dark="bar.dark">
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>
            <span>Latam</span>
            <span class="white-dark">Learning</span>
            <span>Center</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="red">mdi-heart</v-icon>
          </v-btn>
          <v-btn icon v-if="isLoggedIn" @click="handleLogout">
            <span>Out</span>
            <v-icon color="red">mdi-logout</v-icon>
          </v-btn>
          <router-link to="/login" v-if="!isLoggedIn">
            <span>Ingresar</span>
            <v-icon  color="green">mdi-login</v-icon>
          </router-link>
        </v-toolbar>
        <v-navigation-drawer 
        v-model="drawer" 
        class="light-blue lighten-5"
        app
        >
        <div class="nav-container">
          <v-btn icon class="close-drawer"  @click="drawer = !drawer">
              <v-icon>mdi-arrow-left</v-icon>
              <v-spacer></v-spacer>
          </v-btn> 
          <div v-if="isLoggedIn" class="nav-links">
            <router-link v-for="route in getLoggeInRoutes"  class="nav-links" :to="route.path" :key="route.name">{{route.name}}</router-link>
            <button @click="handleLogout">Salir</button>
          </div>
          <div v-else class="nav-links">
            <router-link v-for="route in getWelcomeRoutes"  class="nav-links" :to="route.path" :key="route.name">{{route.name}}</router-link>
          </div>
        </div>
        </v-navigation-drawer>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { persistentsNavRoutes, loggedInNavRoutes, loggedOutNavRoutes } from '../../router/routes'


export default {
  name: 'AppHeader',
  data() {
    return {
      routes: [],
      isModalVisible: false,
       bars: [
        { class: '' },
      ],
      drawer: null
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
    getWelcomeRoutes: () => [...persistentsNavRoutes, ...loggedOutNavRoutes],
    getLoggeInRoutes: () => [...persistentsNavRoutes, ...loggedInNavRoutes],
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    handleLogout(e) {
      e.preventDefault()
      this.logout()
    }
  }
  
}
</script>

<style scoped>
span {
  color: darkgray;
}
.white-dark {
  color: grey;
}
.nav-links {
  display: block;
  color: 'white';
  text-decoration: none;
}
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.close-drawer {
  align-self: flex-end;
}
</style>