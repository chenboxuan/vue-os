<template>
  <div class="home-bg w-h-100 u-rela">
    <div class="w-100 header-wrap">
      <home-header></home-header>
    </div>

    <div class="app-list">
      <app-list></app-list>
    </div>

    <div class="w-100 footer-wrap">
      <home-footer></home-footer>
    </div>

    <manage-app></manage-app>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader';
import HomeFooter from '@/components/home/HomeFooter';
import AppList from '@/components/home/AppList';
import ManageApp from '@/components/home/ManageApp';

export default {
  name: 'HomeDesktop',
  components: {
    HomeHeader,
    HomeFooter,
    AppList,
    ManageApp
  }
}
</script>

<style lang="less" scoped>
.home-bg {
  background: linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347);
}
.header-wrap {
  position: absolute;
  top: 0;
  left: 0;
}
.footer-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
}
.app-list {
  padding-top: 34px;
  width: 100%;
  height: calc(100% - 80px);
}
</style>
