import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        score: 0,
        result: '',
    },
    mutations: {
        setScore(state, newScore) {
            state.score = newScore;
        },
        setResult(state, result) {
            state.result = result;
        },
    },
    actions: {
        updateScore({ commit }, newScore) {
            commit('setScore', newScore);
        },
        updateResult({ commit }, result) {
            commit('setResult', result);
        },
    },
    getters: {
        getScore: (state) => state.score,
        getResult: (state) => state.result,
    },
});
