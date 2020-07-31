import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gold: 0,
    activities: []
  },
  mutations: {
    increase(state, newGold) {
      state.gold = state.gold + newGold
    },
    addActivity(state, newActivity) {
      state.activities = [...state.activities, newActivity]
    },
    resetAll(state) {
      state.gold = 0,
      state.activities = []
    }
  }
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')