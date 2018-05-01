import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import MyApi from '../api/data'
import zipModule from './modules/zip'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
export const store = new Vuex.Store({
  namespaced: true,
  state: {
  },
  modules: {
    MyApi,
    zipModule
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})
