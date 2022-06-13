<template>
  <header id="header">
    <h1 class="logo" @click="reset">
      <a href="/servicecontrol">뉴스데이터<br />수집 시스템</a>
    </h1>
    <div class="user_infoBox fr">
      <strong class="user_info_txt" @click="myPageClick">
        <!-- {{getAdminInfo.admin_name}}(<span>{{getAdminInfo.code_name}}</span>) -->
        이유나
      </strong>
      <button class="btn" @click="logoutClick">로그아웃</button>
    </div>
  </header>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  methods: {
    myPageClick: function() {
      this.$router.push({ name: "mypage" });
    },
    logoutClick: function() {
      this.logout()
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
          alert("로그아웃 중 에러가 발생했습니다.");
        });
    },
    reset: function() {
      localStorage.clear();
    },
    ...mapActions(["logout"]),
  },
};
</script>
