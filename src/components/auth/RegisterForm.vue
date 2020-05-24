<template>
  <v-card class="mx-auto mt-10">
    <v-card-title>
      <h3 class="display-1">Registro</h3>
    </v-card-title>
    <v-card v-if="errors.length" class="error">
      <v-card-text>
        <h3>Errores en el formulario</h3>
        <ul v-for="error in errors" :key="error">
          <li class="white--text">{{error}}</li>
        </ul>
      </v-card-text>
    </v-card>
    <v-card-text>
      <v-form
      @submit="checkForm"
      >
        <v-text-field
        label="Nombres"
        prepend-icon="mdi-account-multiple"
        v-model="name"
        :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
        label="Apellidos"
        prepend-icon="mdi-account-multiple"
        v-model="lastname"
        :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          label="Usuario/Email"
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
        <v-text-field
          :type="showConfirm ? 'text' : 'password'"
          label="Confirma tu Contraseña"
          prepend-icon="mdi-lock"
          :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showConfirm = !showConfirm"
          v-model="confirmPassword"
          :rules="[rules.required,equalpassword]"
        />
        <v-card>
          <v-card-text>
            <p class="display-1 text--secondary">Direccion De Residencia</p>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters>
              <v-col
              cols="12"
              sm="12"
              lg="4"
              >
                <v-select
                :items="countryList"
                label="País de Residencia"
                outlined
                v-model="country"
                ></v-select>
              </v-col>
              <v-col
              cols="12"
              sm="12"
              lg="4"
              >
              <v-select
                :items="stateList"
                label="Estado/Provincia/Departamento"
                outlined
                v-model="state"
                ></v-select>
              </v-col>
              <v-col
              cols="12"
              sm="12"
              lg="4"
              >
              <v-select
              :items="cityList"
              label="Ciudad/Pueblo/Corregimiento"
              outlined
              v-model="city"
              ></v-select>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      
      <v-btn class="success" @click="handleSubmit">Registrarme</v-btn>
      
      <v-spacer></v-spacer>
      <router-link to="/login">
        <v-btn class="info">Ingresar</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "RegisterForm",
  data: () => ({
    name: '',
    lastname: '',
    showPassword: false,
    email: '',
    password: '',
    confirmPassword: '',
    showConfirm: false,
    country: '',
    state: '',
    city: '',
    countryList: ["Colombia", "Polombia", "Locombia"],
    stateList: ["Bogota DC", "Choco", "Guajira"],
    cityList: ["Bogota", "Quibdo", "Rioacha"],
    rules: {
      required: value => !!value || "Required.",
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "E-mail no válido.";
      },
    },
    errors: [],
    valid: true,
    lazy: false
  }),
  computed: {
    equalpassword() {
      return () => ( (this.confirmPassword === this.password) || 'Contraseña diferente')
    },
    checkForm() {
      return () => {
        if(this.name && this.lastname && this.password && this.confirmPassword) return true
        else {
          this.errors = []
          if (!this.name) this.errors.push('Nombre requerido')
          if (!this.lastname) this.errors.push('Apellido requerido')
          if (!this.email) this.errors.push('Email requerido')
          if (!this.password) this.errors.push('Contraseña requerida')
          if (!this.confirmPassword) this.errors.push('Confirmacion de contraseña requerida')
          return false
        }
      }
    }
  }, 
  methods: {
    ...mapActions({
      register: 'register'
    }),
    handleSubmit() {
      if(this.checkForm()){
        this.register({ 
          name: this.name,
          lastname: this.lastname,
          email: this.email, 
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          state: this.state,
          city: this.city
        });
      }
      console.log("Errors:", this.errors)
    },
  }
};
</script>
