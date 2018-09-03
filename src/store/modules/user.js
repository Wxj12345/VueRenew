/**
 * Created by lsj on 2018/3/9.
 */
import methodinfo from '../../config/MethodConst.js'
import axiosinstance from '../../common/axiosinstance'

// initial state
const state = {
  groupid: '',
  username: '',
  hotel:{
    groupid:'',
    userid:'',
    password:''
  },
  empno: {},
  empsale: '',
}

// getters
const getters = {
  groupid: state => state.groupid,
  username: state => state.username,

  hotel: state => state.hotel,

  empno: state => state.empno,

  empsale: state => state.empsale
}

// actions
const actions = {
  getsysempno: function (store, token) {
    return new Promise((resolve, reject) => {
      axiosinstance.defaults.headers.common['username'] = store.getters.username
      axiosinstance.defaults.headers.common['signature'] = token
      axiosinstance.defaults.headers.common['timestamp'] = new Date().getTime()
      axiosinstance.post(methodinfo.getempnoinfo, {
        username: store.getters.username
      }).then(function (response) {
        if (response.status === 200) {
          if (response.data.errorCode !== '0') {
            reject(response.data.errorMessage)
          } else {
            store.commit('setEmpno', response.data)
          }
        }
        resolve()
      })
    })
  }
}

// mutations
const mutations = {
  setGroupid (state, groupid) {
    state.groupid = groupid
  },
  setUsername (state, username) {
    state.username = (String(username)).toUpperCase()
  },
  setHotel (state, hotel) {
    state.hotel = hotel
  },
  setEmpno (state, empno) {
    delete empno.password
    delete empno.md5
    state.empno = empno
  },
  setEmpSale (state, empsale) {
    state.empsale = empsale
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
