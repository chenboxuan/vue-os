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
      >
        <div>
          <img :src="item.logo" alt="" />
        </div>
        <div class="u-line-2">{{ item.name }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppList',
  data () {
    return {
      appList: []
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
  width: 60px;
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
</style>