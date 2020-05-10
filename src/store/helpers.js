import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.user,
  }),
  ...mapGetters('auth', ['isLoggedIn', 'isLoggedOut']),
}


export const authMethods = mapActions('auth', ['login', 'logout'])