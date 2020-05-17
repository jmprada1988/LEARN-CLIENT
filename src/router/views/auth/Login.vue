<template>
  <div class="container">
    <div class="inner-container">
      <div class="inner-container__header">
        <div>
          <img src="../../../assets/sample-logo.png" width="70px" alt="Logo Learning Center" />
        </div>
        <p>Ingreso</p>
      </div>
      <div class="inner-container__fields">
        <form>
          <label for="email">E-Mail Address</label>
          <div>
            <input id="email" type="email" v-model="email" required autofocus />
          </div>
          <div>
            <label for="password">Password</label>
            <div>
              <input id="password" type="password" v-model="password" required />
            </div>
          </div>
          <div>
            <button type="submit" @click="handleSubmit">Login</button>
          </div>
        </form>
        <div class="inner-container__social"></div>
        <div class="inner-container__footer"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
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
<style lang="scss" scoped>
.container {
  background: #0052d4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6fb1fc,
    #4364f7,
    #0052d4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6fb1fc,
    #4364f7,
    #0052d4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.inner-container {
  &:hover {
    background-color: #4364f7;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px;
    margin: 1px;
    img {
      border-radius: 10px 25px 10px;
    }
  }
  &__fields {
    border: 1px solid blue;
    min-height: 100px;
  }
  &__social {
    border: 1px solid rgb(56, 163, 53);
    min-height: 100px;
  }
  &__footer {
    border: 1px solid black;
    min-height: 100px;
  }
}
</style>