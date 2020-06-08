<template>
  <button @click="handleSubmit">
    Logout
  </button>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async handleSubmit() {
      await this.logout()
      this.$router.push('login')
    }
  }
}
</script>