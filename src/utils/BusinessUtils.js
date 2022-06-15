export default {
    getPath: function(url, jsonObj) {
        var path = ''
        var params = ''

        if (jsonObj === undefined) {
            path = url
        } else {
            var count = Object.keys(jsonObj).length
            var key = Object.keys(jsonObj)
            var value = Object.values(jsonObj)

            for (let i = 0; i < count; i++) {
                if (value[i] !== null && value[i] !== undefined) {
                    params += key[i] + '=' + value[i]
                }
                if (value[i] !== null && value[i] !== undefined && i < count - 1) {
                    params += '&'
                }
            }
            path = url + '?' + params
        }
        return path
    },
}