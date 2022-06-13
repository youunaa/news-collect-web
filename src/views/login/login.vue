<template>
    <section id="container" class="login">
        <div class="loginBox">
            <h2 class="login_logo"><br>뉴스데이터 수집 서비스 시스템</h2>
            <form @submit.prevent="onSubmit">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong class="login_tit" >아이디</strong>
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
                            <td><input type="submit" value="로그인" class="login_btn bgClr_blue"></td>
                        </tr>
                        <tr>
                            <td class="login_txt">
                                <a @click="join" style="cursor:pointer">회원가입</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </section>
</template>

<script>
import {mapActions} from "vuex"

export default{
    data(){
        return{
            loginInfo:{
                userId : "",
                password : ""
            }
        }
    },
    methods:{
        onSubmit(){
            if(this.loginInfo.userId.length === 0){
                alert("아이디를 입력해주세요.");
            } else if( this.loginInfo.password.length === 0 ){
                alert("비밀번호를 입력해주세요.")
            } else{
                this.login(this.loginInfo)
            }
        },
        
        join() {
            alert("회원가입?")
        },

        ...mapActions(['login'])
   }
}
</script>