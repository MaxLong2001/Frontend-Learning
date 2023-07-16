export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        PLUS(state, n) {
            state.sum += n
        },
        SUBTRACT(state, n) {
            state.sum -= n
        },
    },
    state: {
        sum: 0,
        school: 'Tsinghua University',
        subject: 'Computer Science',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}