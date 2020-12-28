<template>
  <div class="u-flex">
    <div class="nav-item" v-for="item of navList" :key="item.id">{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      navList: [
        { id: 1, name: '开始' },
        { id: 2, name: '应用' },
        { id: 3, name: '设定' },
        { id: 4, name: '帮助' },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.nav-item {
  padding: 0 15px;
}
.nav-item:hover {
  border-radius: 4px;
  background: rgba(0, 0, 0, .1);
}
</style>