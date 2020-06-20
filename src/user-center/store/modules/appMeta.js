const state = {
  currentPath: null,
};

const getters = {};

const actions = {
  async setCurrentPath({ commit }, path) {
    commit('setCurrentPath', path);
  },
};

const mutations = {
  setCurrentPath(state, path) {
    state.currentPath = path;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
