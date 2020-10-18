import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'
import moudleA from './modules/moduleA'

export default new Vuex.Store({
  state: {
    count:1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations,
  getters,
  actions,
  modules: {
    a:moudleA
  }
})
