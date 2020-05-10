<template>
    <div>
        <h4>Registro</h4>
        <form>
            <label for="name">Nombre</label>
            <div>
                <input id="name" type="text" v-model="name" required autofocus>
            </div>
            <label for="lastname">Apellido</label>
            <div>
              <input id="lastname" type="text" v-model="lastname" required autofocus>
            </div>

            <label for="email" >Correo Electrónico</label>
            <div>
                <input id="email" type="email" v-model="email" required>
            </div>

            <label for="password">Contraseña</label>
            <div>
                <input id="password" type="password" v-model="password" required>
            </div>

            <label for="password-confirm">Confimación de contraseña</label>
            <div>
                <input id="password-confirm" type="password" v-model="passwordConfirmation" required>
            </div>

            <label for="password-confirm">Cuenta de administrador?</label>
            <div>
                <select v-model="isAdmin">
                    <option value=1>Yes</option>
                    <option value=0>No</option>
                </select>
            </div>
            <details>
              <summary>Informacion de residencia</summary>
              <option-select
                text="País"
                v-bind:model="country"
                v-bind:list="countryList"
              ></option-select>
              <option-select
                text="Estado/Departamento"
                v-bind:model="state"
                v-bind:list="stateList"
              ></option-select>
              <option-select
                text="Ciudad/Pueblo"
                v-bind:model="city"
                v-bind:list="cityList"
              ></option-select>
            </details>

            <div>
                <button type="submit" @click="handleSubmit">
                    Register
                </button>
            </div>
        </form>
    </div>
</template>
<script>
import OptionSelect from '../../../components/ui/OptionsList'
    export default {
        props : ["nextUrl"],
        data(){
            return {
                name : '',
                lastname: '',
                email : '',
                password : '',
                passwordConfirmation : '',
                country: '',
                state: '',
                city: '',
                isAdmin : null,
                countryList: ["Colombia", "Polombia", "Locombia"],
                stateList: ["Bogota DC", "Choco", "Guajira"],
                cityList: ["Bogota", "Quibdo", "Rioacha"]
            }
        },
        components: {
          OptionSelect
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()

                if (this.password === this.passwordConfirmation && this.password.length > 0)
                {
                    let url = "http://localhost:3000/register"
                    if(this.isAdmin != null || this.isAdmin == 1) url = "http://localhost:3000/register-admin"
                    this.$store.dispatch('register', {})
                    this.$http.post(url, {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        isAdmin: this.isAdmin
                    })
                    .then(response => {
                        localStorage.setItem('user',JSON.stringify(response.data.user))
                        localStorage.setItem('jwt',response.data.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$emit('loggedIn')
                            if(this.$route.params.nextUrl != null){
                                this.$router.push(this.$route.params.nextUrl)
                            }
                            else{
                                this.$router.push('/')
                            }
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert("Passwords do not match")
                }
            }
        }
    }
</script>