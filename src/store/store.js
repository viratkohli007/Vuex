import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter : 0
    },
    getters:{
        doubleCounter: state => {
            return state.counter * 2
        },
        clicks : state => {
            return state.counter;
        }
    },
    mutations: {
        increment: state =>{
            state.counter++
        },
        decrement: state =>{
            state.counter--
        }
    }
})