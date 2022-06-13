export default {

    errorMessage: function(errStatus) {
        if (errStatus === 400) {
            console.log("Error: Request failed with status errStatus 400")
        }
        if (errStatus === 401) {
            console.log("Error: Request failed with status errStatus 401")
        }
        if (errStatus === 403) {
            console.log("Error: Request failed with status errStatus 403")
        }
        if (errStatus === 404) {
            console.log("Error: Request failed with status errStatus 404 ! ! !")
        }
        if (errStatus === 500) {
            console.log("Error 500\n현재 서비스의 상태가 원할하지 않습니다\n관리자에게 문의해주세요")
        }
    }

}