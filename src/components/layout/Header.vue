<template>
  <header id="header">
    <h1 class="logo" @click="reset">
      <a href="/collect/setting">뉴스데이터<br />수집 시스템</a>
    </h1>
    <div class="user_infoBox fr">
      <strong class="user_info_txt">
      </strong>
      <button class="btn" @click="logoutClick" style="margin-top: 13px;">로그아웃</button>
    </div>
  </header>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "Header",
  methods: {
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
