import api from '@/api'
import businessUtils from "@/utils/BusinessUtils.js"
import error from "@/utils/ErrorTypeUtils.js"

export default {

    GET: function(URL, PARAMS) {
        var path = businessUtils.getPath(URL, PARAMS)

        return new Promise(function(resolve, reject) {
            api.get(path, {
                    headers: { 'x-accept-type': 'operator' }
                })
                .then(res => {
                    if (res.data.resultCode === 0) {
                        resolve(res.data)
                    } else {
                        reject(res.data.desc)
                    }
                }).catch(err => (
                    error.errorMessage(err.response.status)
                ))
        })
    },
    POST: function(URL, PARAMS) {
        return new Promise(function(resolve, reject) {
            api.post(URL, PARAMS, { headers: { 'x-accept-type': 'operator' } })
                .then(res => {
                    if (res.data.resultCode === 0) {
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
    PUT: function(URL, PARAMS) {
        return new Promise(function(resolve, reject) {
            api.put(URL, PARAMS, { headers: { 'x-accept-type': 'operator' } })
                .then(res => {
                    if (res.data.resultCode === 0) {
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
    DELETE: function(URL, PARAMS) {
        var path = businessUtils.getPath(URL, PARAMS)

        return new Promise(function(resolve, reject) {
            api.delete(path, { headers: { 'x-accept-type': 'operator' } })
                .then(res => {
                    if (res.data.resultCode === 0) {
                        resolve(res.data)
                    } else {
                        reject(res.data.desc)
                    }
                }).catch(err => (
                    error.errorMessage(err.response.status)
                ))
        })
    },
    FILE_GET: function(URL, PARAMS) {
        var path = businessUtils.getPath(URL, PARAMS)

        return new Promise(function(resolve) {
            api.get(path, { headers: { 'x-accept-type': 'operator' }, responseType: 'blob' })
                .then(res => {
                    resolve(res)
                }).catch(err => (
                    error.errorMessage(err.response.status)
                ))
        })
    }

}