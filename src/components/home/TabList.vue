<template>
  <div class="u-flex u-col-center list-wrap">
    <template v-for="item of tabListData">
      <div
        :class="tabClass(item)"
        :key="item.id"
        v-if="item.modalInfo.show"
        @click="changeActionApp(item)"
        @contextmenu.prevent.stop="openContextMenu($event, item)"
      >
        <img :src="item.logo" alt="" />
        <span class="u-line-1">{{ item.name }}</span>
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
  name: 'TabList',
  data () {
    return {
      eventInfo: {},
      showMenu: false,
      menuList: [
        { id: 1, name: '最大化' },
        { id: 2, name: '最小化' },
        { id: 3, name: '关闭' },
      ],
      actionData: {}
    }
  },
  components: {
    ContextMenu
  },
  created () {
    this.tabList = this.$store.getters.getBottomTabs
  },
  computed: {
    tabClass () {
      return item => {
        let res = 'tab-item u-flex u-col-center '
        if (item.id === this.$store.state.actionApp.id && item.modalInfo.visible) {
          res += 'tab-active'
        }
        return res
      }
    },
    tabListData () {
      let arr = [...this.$store.state.appList]
      arr.sort((a, b) => {
        return a.modalInfo.number - b.modalInfo.number
      })
      return arr
    }
  },
  methods: {
    changeActionApp (item) {
      if (this.$store.state.actionApp.id === item.id) {
        this.$store.commit('changeAppVisible', { data: item, show: false })
        this.$store.commit('changeActionApp', {})
      } else {
        this.$store.commit('changeAppVisible', { data: item, show: true })
        this.$store.commit('changeActionApp', item)
        this.$store.commit('changeAppZindex', item)
      }
    },
    openContextMenu (e, data) {
      this.actionData = data
      this.eventInfo = {
        clientX: e.clientX,
        clientY: e.clientY,
      }
      this.showMenu = true
    },
    menuChange (data) {
      if (data.id === 1) {
        let info = {
          width: '100%',
          height: '100%',
          left: 0,
          top: 0,
          isFull: true
        }
        this.$store.commit('changeModalStyle', {
          app: this.actionData,
          data: info
        })
        this.$store.commit('changeAppVisible', { data: this.actionData, show: true })
        this.$store.commit('changeActionApp', this.actionData)
        this.$store.commit('changeAppZindex', this.actionData)
      } else if (data.id === 2) {
        this.$store.commit('changeAppVisible', { data: this.actionData, show: false })
        this.$store.commit('changeActionApp', {})
      } else if (data.id === 3) {
        this.$store.commit('changeAppModal', { data: this.actionData, show: false })
        this.$store.commit('modifyActionApp')
      }
    }
  },
}
</script>

<style lang="less" scoped>
.list-wrap {
  margin: 0 15px;
  width: 91%;
  overflow: auto;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
.list-wrap::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.tab-item {
  margin-right: 5px;
  line-height: 30px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 12px;
  max-width: 120px;

  img {
    margin-right: 5px;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    vertical-align: middle;
  }

  span {
    vertical-align: middle;
  }
}
.tab-item:hover,
.tab-active {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
