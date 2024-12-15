import { createStore } from 'vuex';
import { getWinNumbers } from '@/utils/randomNumbers';

export default createStore({
    state: {
        winNumbers: [],  // 생성된 로또 번호와 보너스 번호
        winBalls: [],    // 화면에 표시할 당첨 번호
        bonus: null,     // 보너스 번호
        redo: false,     // 다시 시작 버튼 표시 여부
    },
    mutations: {
        setNumbers(state) {
            state.winNumbers = getWinNumbers();
            state.winBalls = [];
            state.bonus = null;
            state.redo = false;
        },
        addWinBall(state, number) {
            state.winBalls.push(number);
        },
        setBonus(state, number) {
            state.bonus = number;
        },
        setRedo(state, value) {
            state.redo = value;
        },
    },
    actions: {
        generateNumbers({ commit }) {
            commit('setNumbers');
        },
        showBalls({ state, commit }) {
            state.winNumbers.slice(0, 6).forEach((number, index) => {
                setTimeout(() => {
                    commit('addWinBall', number);
                }, (index + 1) * 500);
            });
            setTimeout(() => {
                commit('setBonus', state.winNumbers[6]);
                commit('setRedo', true);
            }, 3500);
        },
    },
});
