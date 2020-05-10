<template>
    <div>
        <h4>Login</h4>
        <form>
            <label for="email" >E-Mail Address</label>
            <div>
                <input id="email" type="email" v-model="email" required autofocus>
            </div>
            <div>
                <label for="password" >Password</label>
                <div>
                    <input id="password" type="password" v-model="password" required>
                </div>
            </div>
            <div>
                <button type="submit" @click="handleSubmit">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import {mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleSubmit(e) {
      e.preventDefault()
      await this.login({email: this.email, password: this.password})
      this.$router.push('userboard')
    }
  }
}
</script>