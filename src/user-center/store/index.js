import Vuex from 'vuex';
import Vue from 'vue';
import summary from './modules/summary';
import appMeta from './modules/appMeta';
import createLogger from '../logger';
import { vuexConfig } from '../MFConfig';

Vue.use(Vuex);

const { debug, strict } = vuexConfig;

export default new Vuex.Store({
  modules: {
    summary,
    appMeta,
  },
  strict,
  plugins: debug ? [createLogger()] : [],
});
