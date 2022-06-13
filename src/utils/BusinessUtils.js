export default {
    telNumFormat: function(telNum) {
        if (!telNum) return telNum
        var formatNum = '';
        if (telNum.length == 11) {
            formatNum = telNum.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
        } else if (telNum.length == 8) {
            formatNum = telNum.replace(/(\d{4})(\d{4})/, '$1-$2');
        } else {
            if (telNum.indexOf('02') == 0) {
                formatNum = telNum.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
            } else {
                formatNum = telNum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            }
        }

        return formatNum;

    },
    accountNumFormat(accountNum) {
        if (!accountNum) return accountNum;
        return accountNum.replace(/-/g, '');
    },
    authToString(auth) {
        switch (auth) {
            case "0":
                return "슈퍼관리자"
            case "1":
                return '관리자'
        }
    },
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
    telNumSplit: function(telNum, index) {
        if (!telNum) return telNum

        var num = this.telNumFormat(telNum)
        var hp = (num || "").split("-")
        return hp[index];
    },
    parser(date) {
        if (date !== undefined) {
            return date.substring(0, 16).replace("T", " ");
        }
    },
    // 63324;제주특별자치도 제주시 화삼북로 136; (도련이동, 삼화사랑으로부영1차아파트) => (63324) 제주특별자치도 제주시 화삼북로 136 (도련이동, 삼화사랑으로부영1차아파트)
    addressToHumanReadable: function(addr) {
        if (!addr) return addr

        var values = addr.split(";")
        if (values.length == 3) {
            return '(' + values[0] + ') ' + values[1] + ' ' + values[2]
        }

        return addr.replace(';', '')
    },
    addrSplit: function(address, index) {
        if (!address) return address

        var addr = (address || "").split(";")
        return addr[index];
    },
    birthParser: function(birth, index) {
        if (!birth) return birth

        var birthday = (birth || "").split(".")
        return birthday[index];
    },
    carNumSplit: function(car_num, index) {
        if (!car_num) return car_num

        var carNum = (car_num || "").split(";")
        return carNum[index];
    },
    carNumToHumanReadable: function(carNum) {
        if (!carNum) return carNum

        var values = carNum.split(";")
        if (values.length == 4) {
            return values[0] + ' ' + values[1] + ' ' + values[2] + ' ' + values[3]
        }
        return carNum.replace(';', '')
    },
    getFileExtends: function(file_name) {
        if (!file_name) return file_name

        var carNum = (file_name || "").split(".")
        return carNum[1];
    },
    getNoticeTarget(type) {
        switch (type) {
            case 'ALL':
                return "공통"
            case 'NC':
                return "고객사"
            case 'NN':
                return "일반"
        }
    },
    getQnaRole(role) {
        switch (role) {
            case "NQ":
                return "일반"
            case "DQ":
                return '기사'
            case "CQ":
                return '고객사'
        }
    },
    tagValueSplit(tag_val) {
        if (tag_val !== '') {
            var tagSplitVal = ""
            var values = tag_val.split("#")
            var tag = new Array()

            for (var i = 0; i < values.length; i++) {
                if (values[i] !== '' && values[i] !== ' ') {
                    tag.push(values[i])
                }
            }

            for (var j = 0; j < tag.length; j++) {
                tagSplitVal = tagSplitVal + "#" + tag[j]
            }

            return tagSplitVal
        }
    }
}