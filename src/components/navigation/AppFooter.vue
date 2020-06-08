<template>
  <v-footer light height="auto" app>
    <v-card flat tile class="purple lighten-1 white--text text-xs-center flex">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px">{{icon}}</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text text-center">
        &copy;{{year}} - <strong>Latam Learning Center</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-github'
      ],
      year: new Date().getUTCFullYear()
    }
  },
}
</script>