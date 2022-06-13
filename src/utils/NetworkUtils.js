import api from '@/api'
import businessUtils from "@/utils/BusinessUtils.js"
import error from "@/utils/ErrorTypeUtils.js"

export default {

    GET: function (URL, PARAMS) {
        var path = businessUtils.getPath(URL, PARAMS)

        return new Promise(function (resolve, reject) {
            api.get(path)
            .then(res => {
                if (res.data.resultCode === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data.desc)
                }
            }).catch(err => (
                error.errorMessage(err.response.status)
            ))
        })
    },
    
    POST: function (URL, PARAMS) {
        return new Promise(function (resolve, reject) {
            api.post(URL, PARAMS)
            .then(res => {
                if (res.data.resultCode === 200) {
                    resolve(res.data)
                } else {
                    reject(res.data.desc)
                }
            })
            .catch(err => (
                error.errorMessage(err.response.status)
            ))
        })
    },

}