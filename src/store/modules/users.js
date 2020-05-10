/*
*   store/modules/users.module.js
*/

// import the api endpoints
import { getAllUsers } from "@/services/users.api"

const state = {
    users: []
}

const getters = {
    getUsers(state) {
        return state.users;
    }
}

const actions = {
    async fetchUsers({ commit }) {
      try {
        const response = await getAllUsers()
        commit('SET_USERS', response.data);
    } catch (error) {
        // handle the error here
      console.log(error)
    }
    }

}

const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}