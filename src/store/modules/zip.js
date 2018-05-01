import MyApi from '../../api/data'

const state = {
  sendInfo: '',
  startZip: '',
  endZip: '',
  Startcity: '',
  Endcity: '',
  name: '',
  number: '',
  packageType: '',
  confirmed: false,
  packs: null
}
const mutations = {
  sendInfo (state, payload) {
    state.sendInfo = payload
  },
  sendData (state, payload) {
    state.sendData = payload
  },
  Startcity (state, payload) {
    state.Startcity = payload
  },
  name (state, payload) {
    state.name = payload
    console.log('i change to ' + state.name)
  },
  Endcity (state, payload) {
    state.Endcity = payload
  },
  confirmed (state, payload) {
    state.confirmed = payload
  },
  packs (state, payload) {
    state.packs = payload
  },
  startZip (state, payload) {
    state.startZip = payload
    console.log(state.startZip)
  },
  endZip (state, payload) {
    state.endZip = payload
  },
  number (state, payload) {
    state.number = payload
  },
  packageType (state, payload) {
    state.packageType = payload
  }
}
const actions = {
  lookupS ({commit}, zip) {
    console.log('i got here')
    commit('Startcity', 'loading...')
    MyApi.getZip(zip, cb => {
      commit('Startcity', (cb.city + ',' + cb.state))
    })
  },
  lookupE ({ commit }, zip) {
    commit('Endcity', 'loading...')
    MyApi.getZip(zip, cb => {
      commit('Endcity', (cb.city + ', ' + cb.state))
    })
  },
  submitting ({commit, getters}) {
    console.log('HIHOOO')
    const sendingInfo = 'Name : ' + getters.name + '\n' +
            'phone number : ' + getters.number + '\n' +
            'package type : ' + getters.packageType + '\n' +
            'from city, state : ' + getters.Startcity + '\n' +
            'to city, state : ' + getters.Endcity + '\n'
    commit('sendInfo', sendingInfo)
    console.log(sendingInfo)
  },
  async confirmOrder ({commit, getters}) {
    try {
      const obj = {
        userId: getters.number,
        id: getters.name,
        title: getters.packageType,
        body: getters.Startcity + '|| to ||' + getters.Endcity
      }
      await MyApi.postData(obj, cb => {
        console.log(cb)
        commit('confirmed', true)
        commit('packs', cb)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
const getters = {
  getstate (state) {
    return state
  },
  sendInfo (state) {
    return state.sendInfo
  },
  startZip (state) {
    return state.startZip
  },
  endZip (state) {
    return state.endZip
  },
  Startcity (state) {
    return state.Startcity
  },
  Endcity (state) {
    return state.Endcity
  },
  name (state) {
    return state.name
  },
  number (state) {
    return state.number
  },
  packageType (state) {
    return state.packageType
  },
  confirmed (state) {
    return state.confirmed
  },
  packs (state) {
    return state.packs
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters

}
