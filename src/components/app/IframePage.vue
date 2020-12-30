<template>
  <div class="w-h-100">
    <iframe class="app-iframe" :src="app.iframe"></iframe>
  </div>
</template>

<script>
export default {
  name: 'IframePage',
  props: {
    app: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.app-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>