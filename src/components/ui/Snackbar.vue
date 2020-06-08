<template>
  <v-card v-if="getSnackStatus">
    <v-snackbar
      v-model="getSnackStatus"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ getSanckMessage }}
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>


<script>
import { mapGetters } from 'vuex'
  export default {
    name: 'Snackbar',
    data: () => ({
        color: 'green',
        mode: '',
        snackbar: false,
        text: 'Hello, I\'m a snackbar',
        timeout: 6000,
        x: 'left',
        y: 'top',
    }),
    computed: {
      ...mapGetters([
        'getSanckMessage',
        'getSnackStatus'
      ])
    }
  }
</script>