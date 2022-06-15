import CSNetwork from '@/utils/CSNetwork.js'
import router from '@/router'

import {
    SET_ACCESS_TOKEN,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO
} from './mutations-types'

export default {
    login({ commit }, params) {
        return CSNetwork.reqLogin(params).then((res) => {
            const accessToken = res.body;

            if (accessToken) {
                commit(SET_ACCESS_TOKEN, accessToken);
                router.push('collect/setting');
            } else {
                router.push('login');
            }
        }).catch(res => (
            alert(res)
        ))
    },
    logout({ commit }) {
        commit(DESTROY_MY_INFO)
        commit(DESTROY_ACCESS_TOKEN)
    }
}