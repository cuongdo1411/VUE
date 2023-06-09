import Vuex from 'vuex';
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import action from './action.js';
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    action
})

export default store