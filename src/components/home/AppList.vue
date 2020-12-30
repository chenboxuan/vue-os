<template>
  <div
    class="list-wrap h-100 u-flex u-flex-col u-col-top u-row-left u-flex-wrap u-text-center"
  >
    <template v-for="item of appList">
      <div
        class="u-flex u-flex-col u-col-center u-row-center app-item"
        :key="item.id"
        v-if="handleType(item.type)"
        @dblclick="openApp(item)"
        @contextmenu.prevent.stop="openContextMenu"
      >
        <div>
          <img :src="item.logo" alt="" />
        </div>
        <div class="u-line-2 app-name">{{ item.name }}</div>
      </div>
    </template>

    <context-menu
      v-model="showMenu"
      :eventInfo="eventInfo"
      :menuList="menuList"
      @change="menuChange"
    ></context-menu>
  </div>
</template>

<script>
import ContextMenu from '@/components/common/ContextMenu'

export default {
  name: 'AppList',
  components: {
    ContextMenu
  },
  data () {
    return {
      appList: [],
      showMenu: false,
      eventInfo: {},
      menuList: [
        { id: 1, name: '打开' },
      ],
    }
  },
  computed: {
    handleType () {
      return type => {
        // 桌面应用 或 iframe应用
        const arr = [1, 2]
        return arr.indexOf(type) >= 0
      }
    }
  },
  created () {
    this.appList = this.$store.getters.getAppList
  },
  methods: {
    // 打开app
    openApp (item) {
      this.$store.commit('changeAppModal', { data: item, show: true })
      this.$store.commit('changeActionApp', item)
      this.$store.commit('changeAppZindex', item)
    },
    openContextMenu (e) {
      this.eventInfo = {
        clientX: e.clientX,
        clientY: e.clientY,
      }
      this.showMenu = true
    },
    menuChange (data) {
      if (data.id === 1) {
        this.openApp(data)
      }
    }
  },
}
</script>

<style lang="less" scoped>
.list-wrap {
  box-sizing: border-box;
  padding: 10px;
  width: 0;
}
.app-item {
  margin-bottom: 10px;
  padding: 6px;
  width: 70px;
  font-size: 12px;
  color: #fff;
  border-radius: 6px;
  line-height: 16px;
  user-select: none;
  img {
    width: 40px;
    height: 40px;
    border-radius: 6px;
  }
}
.app-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.app-name {
  word-break: break-all;
}
</style>
