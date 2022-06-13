import networkUtils from '@/utils/NetworkUtils.js'

export default {
    //vuex - 로그인 관리
    request_admin_login: function(params) {
        return networkUtils.POST('/login', params);
    },
    
    request_admin_info: function(params) {
        return networkUtils.GET('/cs/admin/info', params);
    },
}