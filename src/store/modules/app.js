const state = {
  device: 'desktop', // 设备类型
  curtainShow: false
}

const mutations = {
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  TOGGLE_CURTAIN_SHOW: (state) => {
    state.curtainShow = !state.curtainShow
  }
}

const actions = {
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  toggleCurtainShow({ commit }) {
    commit('TOGGLE_CURTAIN_SHOW')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
