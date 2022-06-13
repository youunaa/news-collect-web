<template>
<div id="app">
    <router-view name="header"></router-view>
    <router-view name="left"></router-view>
    <router-view />
    <!-- <router-view name="footer"></router-view> -->
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
@import '../src/assets/css/reset.css';
@import '../src/assets/css/common.css';
@import '../src/assets/css/content.css';
@import '../src/assets/css/vue-sidebar-menu.css';
@import '../src/assets/css/vue-sidebar-menu-tmass.css';
</style>
