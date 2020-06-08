<template>
  <v-content>
    <v-container>
      <LoginForm/>
    </v-container>
  </v-content>
</template>
<script>
import { mapActions } from "vuex";
import LoginForm from '../../../components/auth/LoginForm'
export default {
  name: "Login",
  components: {
    LoginForm
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    ...mapActions({
      login: "login"
    }),
    handleSubmit(e) {
      e.preventDefault();
      this.login({ email: this.email, password: this.password });
    }
  }
};
</script>
