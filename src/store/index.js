import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    numberQuestions: 0,
    questionsTotal: 0,
    questionsFinish: 0,
    rublesTotal: 0,
    savedAnswers: {},
  },
  getters: {
    completionPercentage(state) {
      return state.questionsFinish / (state.questionsTotal / 100);
    },
  },
  mutations: {
    init(state, data) {
      for (const key of Object.keys(data)) {
        state[key] = data[key];
      }
    },
    increment(state) {
      state.questionsFinish++;
    },
    decrease(state) {
      state.questionsFinish--;
    },
  },
});

export default store;
