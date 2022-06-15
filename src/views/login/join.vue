<template>
    <section id="container" class="login">
        <div class="loginBox">
            <h2 class="login_logo"><br>회원가입</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong class="login_tit">이름</strong>
                                <input type="text" 
                                    id="admin_user_id"  
                                    v-model="loginInfo.userName" 
                                    maxlength="50"
                                >
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="login_tit">아이디</strong>
                                <input type="text" 
                                    id="admin_user_id"  
                                    v-model="loginInfo.userId" 
                                    maxlength="50"
                                >
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong class="login_tit">비밀번호</strong>
                                <input type="password" 
                                    id="admin_pwd" 
                                    v-model="loginInfo.password"
                                >
                            </td>
                        </tr>
                        <tr>
                            <td><input type="submit" @click="joinClick" value="회원가입" class="login_btn bgClr_blue"></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </section>
</template>

<script>
import axios from "@/utils/CSNetwork.js";
import router from '@/router'

export default{
    data(){
        return {
            loginInfo:{
                userId : "",
                userName : "",
                password : ""
            }
        }
    },
    methods:{
        joinClick() {
            if(this.loginInfo.userId.length === 0){
                alert("아이디를 입력해주세요.");
            } else if( this.loginInfo.userName.length === 0 ){
                alert("이름을 입력해주세요.")
            } else if( this.loginInfo.password.length === 0 ){
                alert("비밀번호를 입력해주세요.")
            } else {
                this.reqJoin()
            }
        },
        
        // 회원가입 요청
        reqJoin() {
            axios.reqJoin(this.loginInfo)
            .then((res) => {
                alert("회원가입이 정상적으로 처리 되었습니다");
            })
            this.$router.push({ name: "login" })
        }

   }
}
</script>