<template>
   <v-content>
     <v-container>
        <register-form></register-form>
     </v-container>
   </v-content>
</template>
<script>
import RegisterForm from '../../../components/auth/RegisterForm'
    export default {
        props : ["nextUrl"],
        data(){
            return {}
        },
        components: {
          RegisterForm
        },
    }
</script>