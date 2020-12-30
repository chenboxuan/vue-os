<template>
  <div class="home-bg w-h-100 u-rela">
    <div class="w-100 header-wrap">
      <home-header></home-header>
    </div>

    <div class="app-list" @contextmenu.prevent.stop="openContextMenu">
      <app-list></app-list>
    </div>

    <div class="w-100 footer-wrap">
      <home-footer></home-footer>
    </div>

    <manage-app></manage-app>

    <context-menu
      v-model="showMenu"
      :eventInfo="eventInfo"
      :menuList="menuList"
      @change="menuChange"
    ></context-menu>
  </div>
</template>

<script>
import HomeHeader from '@/components/home/HomeHeader';
import HomeFooter from '@/components/home/HomeFooter';
import AppList from '@/components/home/AppList';
import ManageApp from '@/components/home/ManageApp';
import ContextMenu from '@/components/common/ContextMenu'

export default {
  name: 'HomeDesktop',
  components: {
    HomeHeader,
    HomeFooter,
    AppList,
    ManageApp,
    ContextMenu,
  },
  data () {
    return {
      showMenu: false,
      eventInfo: {},
      menuList: [
        { id: 1, name: '刷新' },
        { id: 2, name: 'GitHub' },
      ]
    }
  },
  methods: {
    openContextMenu (e) {
      this.eventInfo = {
        clientX: e.clientX,
        clientY: e.clientY,
      }
      this.showMenu = true
    },
    menuChange (data) {
      if (data.id === 1) {
        location.reload()
      } else if (data.id === 2) {
        window.open('https://github.com/chenboxuan/vue-os', '_blank')
      }
    }
  },
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
