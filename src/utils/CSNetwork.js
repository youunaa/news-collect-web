import networkUtils from '@/utils/NetworkUtils.js'

export default {
    // 로그인 요청
    reqLogin: function(params) {
        return networkUtils.POST('/login', params);
    },
    
    // 키워드 목록
    reqKewordList: function(params) {
        return networkUtils.POST('/keword/list', params);
    },

    // 키워드 등록
    reqKewordRegist: function(params) {
        return networkUtils.POST('/keword/reg', params);
    },

    // 사이트 목록
    reqSiteList: function(params) {
        return networkUtils.POST('/site/list', params);
    },

    // 사이트 등록
    reqSiteRegist: function(params) {
        return networkUtils.POST('/site/reg', params);
    },
}