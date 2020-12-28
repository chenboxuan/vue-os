<template>
  <div class="u-flex u-col-center list-wrap">
    <template v-for="item of $store.state.appList">
      <div
        :class="tabClass(item)"
        :key="item.id"
        v-if="item.modalInfo.show"
        @click="changeActionApp(item)"
      >
        <img :src="item.logo" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  created () {
    this.tabList = this.$store.getters.getBottomTabs
  },
  computed: {
    tabClass () {
      return item => {
        let res = 'tab-item '
        if (item.id === this.$store.state.actionApp.id && item.modalInfo.visible) {
          res += 'tab-active'
        }
        return res
      }
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
    }
  },
}
</script>

<style lang="less" scoped>
.list-wrap {
  margin: 0 15px;
}
.tab-item {
  margin-right: 5px;
  line-height: 30px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  font-size: 12px;

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