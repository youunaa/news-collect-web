import networkUtils from '@/utils/NetworkUtils.js'

export default {
    // 로그인 요청
    reqLogin: function(params) {
        return networkUtils.POST('/login', params);
    },
    
    // 키워드 목록
    reqKewordList: function(params) {
        return networkUtils.POST('/data/list', params);
    },

    // 키워드 등록
    reqKewordRegist: function(params) {
        return networkUtils.POST('/data/keword/reg', params);
    },

    // 뉴스 목록
    reqNewsList: function(params) {
        return networkUtils.POST('/news/list', params);
    },

}