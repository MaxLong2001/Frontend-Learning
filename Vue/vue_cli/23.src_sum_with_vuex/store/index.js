import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
    // plus(context, n) {
    //     context.commit('PLUS', n)
    // },
    // subtract(context, n) {
    //     context.commit('PLUS', -n)
    // },
    plusIfOdd(context, n) {
        if (context.state.sum % 2 === 1) {
            context.commit('PLUS', n)
        }
    },
    plusAsync(context, n) {
        setTimeout(() => {
            context.commit('PLUS', n)
        }, 1000)
    }
}
const mutations = {
    PLUS(state, n) {
        state.sum += n
    }
}
const state = {
    sum: 0
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})