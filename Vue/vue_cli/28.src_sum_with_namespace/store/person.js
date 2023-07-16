import axios from 'axios'
import {nanoid} from "nanoid";

export default {
    namespaced: true,
    actions: {
        addWang(context, value) {
            if (value.name.indexOf('Wang') === 0) {
                context.commit('ADD_PERSON', value)
            }
        },
        addServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                res => {
                    context.commit('ADD_PERSON', {
                        id: nanoid(),
                        name: res.data
                    })
                },
                err => {
                    alert(err.message)
                })
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.persons.unshift(personObj)
        }
    },
    state: {
        persons: [{
            id: '001',
            name: 'Tom',
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.persons[0].name
        }
    },
}