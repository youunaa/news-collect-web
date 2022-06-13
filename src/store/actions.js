import CSNetwork from '@/utils/CSNetwork.js'
import router from '@/router'
import store from '@/store'
import api from '@/api'
import {
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO
} from './mutations-types'

export default {
    login({ commit }, params) {
        return CSNetwork.request_admin_login(params).then((res) => {
            const accessToken = res.body
            if (accessToken) {
                commit(SET_ACCESS_TOKEN, accessToken)
                router.push({ name: 'contractmain' })
            } else {
                router.push({ name: 'login' })
            }
        }).catch(res => (
            alert(res)
        ))
    },
    adminInfo({ commit }, params) {
        return CSNetwork.request_admin_info(params).then((res) => {
            commit(SET_MY_INFO, res.body)
            router.push({ name: 'servicecontrol' })
            return true;
        }).catch(res => (
            alert(res)
        ))
    },
    loginByToken({ commit }, token) {
        commit(SET_ACCESS_TOKEN, token)
        return api.get('/cs/admin/info', {
                headers: { 'x-accept-type': 'operator' }
            })
            .then(res => {
                commit(SET_MY_INFO, res.data.body)
            })
            .catch(err => {
                if (err.response.status === 401) {
                    alert('로그인 기간이 만료되었습니다.')
                    commit(DESTROY_MY_INFO)
                    commit(DESTROY_ACCESS_TOKEN)
                    router.push({ name: 'login' })
                }
            })
    },
    logout({ commit }) {
        commit(DESTROY_MY_INFO)
        commit(DESTROY_ACCESS_TOKEN)
    }
}