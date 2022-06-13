export default {
    isAuthorized(state) {
        return state.accessToken.length > 0 && !!state.loginStatus
    },
    getAuthType(state) {
        if (state.loginStatus !== null) {
            return state.loginStatus.admin_auth
        } else return null
    },
    getAdminInfo(state) {
        if (state.loginStatus != null) {
            return state.loginStatus
        } else return null
    },
    getAccessToken(state) {
        return state.accessToken;
    }
}