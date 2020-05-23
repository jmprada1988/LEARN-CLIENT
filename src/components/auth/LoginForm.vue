<template>
  <v-card class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Usuario"
          prepend-icon="mdi-account-circle"
          v-model="email"
          :rules="[rules.required, rules.email]"
        />
        <v-text-field
          :type="showPassword ? 'text' : 'password'"
          label="Contraseña"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          v-model="password"
          :rules="[rules.required]"
        />
      </v-form>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn class="success">Registrarme</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="info" @click="handleSubmit">Ingresar</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LoginForm",
  data: () => ({
    showPassword: false,
    email: "",
    password: "",
    rules: {
      required: value => !!value || "Required.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail no válido.";
      }
    }
  }),
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
