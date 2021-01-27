import Vue from 'vue';
import Vuex from 'vuex';
import draft from './draft';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        draft
    }
})

