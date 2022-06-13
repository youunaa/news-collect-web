import {
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO,
} from './mutations-types'
import api from '@/api'

export default {
    [SET_ACCESS_TOKEN](state, accessToken) {
        if (accessToken) {
            state.accessToken = accessToken
            api.defaults.headers.common.Authorization = `${accessToken}`
            // Cookies.set('accessToken', accessToken)
            sessionStorage.setItem('accessToken', accessToken)
        }
    },
    [SET_MY_INFO](state, loginStatus) {
        if (loginStatus) {
            state.loginStatus = loginStatus
        }
    },
    [DESTROY_ACCESS_TOKEN](state) {
        state.accessToken = ''
        delete api.defaults.headers.common.Authorization
        sessionStorage.removeItem('accessToken')
    },
    [DESTROY_MY_INFO](state) {
        state.loginStatus = null
    }
}
