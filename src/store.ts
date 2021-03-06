import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        systemMsg: '',
    },
    mutations: {
        UPDATE_systemMsg(state, systemMsg: string) {
            state.systemMsg = systemMsg;
        },
    },
});
