import MFApi from '../../js/user-center/MFApi';
import MFConfig from '../../MFConfig';

const state = {
  messageCount: 'from Vuex',
  user: null,
};

const getters = {};

const actions = {
  async getUserInfo({ commit }) {
    if (state.user) {
      return;
    }
    const result = await MFApi.getUserInfo().async();
    const { code, data } = result;
    if (code !== 0) {
      return;
    }
    if (!data) {
      return;
    }
    if (!data.User_photo.startsWith('http')) {
      data.User_photo = `${MFConfig.wwwRoot}/${data.User_photo}`;
    }
    commit('setMessageCount', data.messages_count);
    const user = {
      photo: data.User_photo,
      name: data.User_name,
      id: data.User_hash,
      MemberDisplayName: data.member.Member_displayName,
      phone: data.User_phone,
    };
    commit('setUser', user);
  },
};

const mutations = {
  setMessageCount(state, count) {
    state.messageCount = count;
  },
  setUser(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
