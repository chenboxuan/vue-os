<template>
  <div
    class="context-menu-mask"
    v-if="modelValue"
    @click.stop="closeMenu"
    @contextmenu.prevent.stop="closeMenu"
  >
    <div id="context-menu-1" class="context-menu" :style="menuStyle">
      <div
        class="menu-item"
        v-for="item of menuList"
        :key="item.id"
        @click="handleMenuItem(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContextMenu',
  props: {
    modelValue: {
      type: Boolean
    },
    eventInfo: {
      type: Object
    },
    menuList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      menuStyle: {
        left: 0,
        top: 0
      },
    }
  },
  mounted () {
    this.$watch('modelValue', (newVal, oldVal) => {
      if (newVal) {
        this.$nextTick(this.setPosition)
      }
    })
  },
  methods: {
    closeMenu () {
      this.$emit('update:modelValue', false)
    },
    // 定位
    setPosition () {
      let left = this.eventInfo.clientX
      let top = this.eventInfo.clientY
      const dom = document.getElementById('context-menu-1')
      const w = dom.clientWidth
      const h = dom.clientHeight
      const clientW = document.body.clientWidth
      const clientH = document.body.clientHeight

      if (clientH - top < h) {
        top = top - h
      }
      if (clientW - left < w) {
        left = left - w
      }
      this.menuStyle = {
        left: left + 'px',
        top: top + 'px',
      }
    },
    handleMenuItem (data) {
      this.$emit('change', data)
    }
  },
}
</script>

<style lang="less" scoped>
.context-menu-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 10000;
}
.context-menu {
  position: fixed;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  padding: 4px 0;
  z-index: 10000;
  user-select: none;
}
.menu-item {
  line-height: 28px;
  padding: 0 40px 0 10px;
  color: #333;
  font-size: 14px;
}
.menu-item:hover {
  background-color: rgba(0, 0, 0, 0.15);
}
</style>
