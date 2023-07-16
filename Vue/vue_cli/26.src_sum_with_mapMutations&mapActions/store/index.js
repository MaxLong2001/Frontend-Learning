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
    },
    SUBTRACT(state, n) {
        state.sum -= n
    }
}
const state = {
    sum: 0,
    school: 'Tsinghua University',
    subject: 'Computer Science'
}
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})