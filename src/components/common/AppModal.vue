<template>
  <div
    class="modal"
    :id="modalId"
    :style="{
      zIndex: app.modalInfo.zIndex,
      top: app.modalInfo.top,
      left: app.modalInfo.left,
      width: app.modalInfo.width,
      height: app.modalInfo.height,
    }"
    v-if="app.modalInfo.visible"
    @click="action"
  >
    <div
      class="modal-header u-flex u-row-between"
      @mousedown.stop="handleMouseDown"
    >
      <div class="modal-title">
        <img :src="app.logo" alt="" />
        <span class="u-line-1">{{ app.name }}</span>
      </div>

      <div class="u-flex u-col-center">
        <div class="btn-item sx-btn m-l-10" @click.stop="hide" @mousedown.stop>
          <svg
            t="1608880518198"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2187"
            width="12"
            height="12"
          >
            <path
              d="M863.7 552.5H160.3c-10.6 0-19.2-8.6-19.2-19.2v-41.7c0-10.6 8.6-19.2 19.2-19.2h703.3c10.6 0 19.2 8.6 19.2 19.2v41.7c0 10.6-8.5 19.2-19.1 19.2z"
              p-id="2188"
              fill="rgba(0,0,0,.4)"
            ></path>
          </svg>
        </div>
        <div class="btn-item fd-btn m-l-10" @click.stop="full" @mousedown.stop>
          <svg
            t="1608885085229"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5898"
            width="12"
            height="12"
            v-if="app.modalInfo.isFull"
          >
            <path
              d="M816.64 412.16h-168.96L921.6 138.24 885.76 102.4 611.84 376.32V209.92c0-12.8-10.24-25.6-25.6-25.6-12.8 0-25.6 10.24-25.6 25.6V435.2c0 7.68 2.56 12.8 7.68 17.92 5.12 5.12 10.24 7.68 17.92 7.68h227.84c12.8 0 25.6-10.24 25.6-25.6 2.56-12.8-10.24-23.04-23.04-23.04zM435.2 563.2H207.36c-12.8 0-25.6 10.24-25.6 25.6 0 12.8 10.24 25.6 25.6 25.6h168.96L102.4 885.76 138.24 921.6l273.92-271.36v166.4c0 12.8 10.24 25.6 25.6 25.6s25.6-10.24 25.6-25.6V588.8c0-7.68-2.56-12.8-7.68-17.92-7.68-5.12-12.8-7.68-20.48-7.68z"
              p-id="5899"
              fill="rgba(0,0,0,.4)"
            ></path>
          </svg>
          <svg
            t="1608881893691"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3512"
            width="12"
            height="12"
            v-else
          >
            <path
              d="M184 789.088L389.309 583.78a8 8 0 0 1 11.313 0l39.598 39.598a8 8 0 0 1 0 11.313L234.912 840H384c8.837 0 16 7.163 16 16v48a8 8 0 0 1-8 8H144c-17.673 0-32-14.327-32-32V632a8 8 0 0 1 8-8h48c8.837 0 16 7.163 16 16v149.088z m656-554.422L634.569 440.098a8 8 0 0 1-11.314 0L583.657 400.5a8 8 0 0 1 0-11.314L788.843 184H640c-8.837 0-16-7.163-16-16v-48a8 8 0 0 1 8-8h248c17.673 0 32 14.327 32 32v248a8 8 0 0 1-8 8h-48c-8.837 0-16-7.163-16-16V234.666z"
              fill="rgba(0,0,0,.4)"
              p-id="3513"
            ></path>
          </svg>
        </div>
        <div
          class="btn-item close-btn m-l-10"
          @click.stop="close"
          @mousedown.stop
        >
          <svg
            t="1608882000768"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4418"
            width="12"
            height="12"
          >
            <path
              d="M566.97558594 521.09667969L856.8828125 231.18945312c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355468l-1.58203125-1.58203125c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0L512 466.51660156 222.09277344 176.21386719c-14.63378906-14.63378906-38.75976563-14.63378906-53.39355469 0l-1.58203125 1.58203125c-15.02929688 14.63378906-15.02929688 38.75976563 0 53.39355469l289.90722656 289.90722656L167.1171875 811.00390625c-14.63378906 14.63378906-14.63378906 38.75976563 0 53.39355469l1.58203125 1.58203125c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0L512 576.07226563 801.90722656 865.97949219c14.63378906 14.63378906 38.75976563 14.63378906 53.39355469 0l1.58203125-1.58203125c14.63378906-14.63378906 14.63378906-38.75976563 0-53.39355469L566.97558594 521.09667969z"
              fill="rgba(0,0,0,.4)"
              p-id="4419"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="modal-body" :style="bodyStyle">
      <slot name="body"></slot>
    </div>

    <!-- 控制变换窗体大小的元素 -->
    <div class="top-resize" @mousedown.stop="resize($event, 'top')"></div>
    <div class="bottom-resize" @mousedown.stop="resize($event, 'bottom')"></div>
    <div class="left-resize" @mousedown.stop="resize($event, 'left')"></div>
    <div class="right-resize" @mousedown.stop="resize($event, 'right')"></div>
    <div class="box-resize left-top-resize" @mousedown.stop="resize($event, 'leftTop')"></div>
    <div class="box-resize right-top-resize" @mousedown.stop="resize($event, 'rightTop')"></div>
    <div class="box-resize left-bottom-resize" @mousedown.stop="resize($event, 'leftBottom')"></div>
    <div class="box-resize right-bottom-resize" @mousedown.stop="resize($event, 'rightBottom')"></div>
  </div>
</template>

<script>
import { draggable } from '@libs/draggable'
import { getOffset } from '@libs/util'

export default {
  name: 'AppModal',
  props: {
    app: {
      type: Object
    },
    bodyStyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    modalId () {
      return 'app-modal-id-' + this.app.id
    }
  },
  methods: {
    close () {
      this.$store.commit('changeAppModal', { data: this.app, show: false })
      this.$store.commit('modifyActionApp')
    },
    hide () {
      this.$store.commit('changeAppVisible', { data: this.app, show: false })
      this.$store.commit('modifyActionApp')
    },
    action () {
      this.$store.commit('changeActionApp', this.app)
      this.$store.commit('changeAppZindex', this.app)
    },
    full () {
      let info = {
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        isFull: true
      }
      if (this.app.modalInfo.isFull) {
        info = {
          width: '78%',
          height: '480px',
          left: '10%',
          top: '10%',
          isFull: false
        }
      }
      this.$store.commit('changeModalStyle', {
        app: this.app,
        data: info
      })
    },
    handleMouseDown (e) {
      // 最终赋值
      let info = {
        left: 0,
        top: 0,
      }
      // offset
      let left = getOffset(e.target)
      let top = getOffset(e.target, 'top')
      const node = document.getElementById(this.modalId)
      // 最大距离
      let maxX = document.body.clientWidth - node.clientWidth
      let maxY = document.body.clientHeight - node.clientHeight
      draggable(e, (res) => {
        // 计算
        const l = left + res.moveX
        const t = top + res.moveY
        info.left = l < 0 ? 0 : l > maxX ? maxX : l
        info.top = t < 0 ? 0 : t > maxY ? maxY : t
        // 执行
        this.$store.commit('changeModalStyle', {
          app: this.app,
          data: {
            left: info.left + 'px',
            top: info.top + 'px',
          }
        })
      })
    },
    resize (e, type) {
      // 最终赋值
      let info = {
        left: 0,
        top: 0,
        height: 0,
        width: 0,
      }
      // offset
      const node = document.getElementById(this.modalId)
      let left = getOffset(node)
      let top = getOffset(node, 'top')
      let width = node.clientWidth
      let height = node.clientHeight
      // 最大距离
      let maxX = document.body.clientWidth - node.clientWidth
      let maxY = document.body.clientHeight - node.clientHeight
      let maxW = document.body.clientWidth
      let maxH = document.body.clientHeight
      let minH = 200
      let minW = 400

      draggable(e, (res) => {
        let param = {}
        // 以下进行计算  肯定有最好的方式  我暂时就这样算了
        if (type === 'top') {
          param = {
            left: left,
            width: width,
            top: top + res.moveY,
            height: height - res.moveY
          }
          const H = height + top
          param.height = param.height < minH ? minH : param.height > H ? H : param.height
        } else if (type === 'bottom') {
          param = {
            left: left,
            width: width,
            top: top,
            height: height + res.moveY
          }
          const H = maxH - top
          param.height = param.height < minH ? minH : param.height > H ? H : param.height
        } else if (type === 'left') {
          param = {
            left: left + res.moveX,
            width: width - res.moveX,
            top: top,
            height: height
          }
          const W = left + width
          param.width = param.width < minW ? minW : param.width > W ? W : param.width
        } else if (type === 'right') {
          param = {
            left: left,
            width: width + res.moveX,
            top: top,
            height: height
          }
          const W = maxW - left
          param.width = param.width < minW ? minW : param.width > W ? W : param.width
        } else if (type === 'leftTop') {
          param = {
            left: left + res.moveX,
            width: width - res.moveX,
            top: top + res.moveY,
            height: height - res.moveY
          }
          const W = left + width
          param.width = param.width < minW ? minW : param.width > W ? W : param.width
          const H = height + top
          param.height = param.height < minH ? minH : param.height > H ? H : param.height
        } else if (type === 'leftBottom') {
          param = {
            left: left + res.moveX,
            width: width - res.moveX,
            top: top,
            height: height + res.moveY
          }
          const W = left + width
          param.width = param.width < minW ? minW : param.width > W ? W : param.width
          const H = maxH - top
          param.height = param.height < minH ? minH : param.height > H ? H : param.height
        } else if (type === 'rightTop') {
          param = {
            left: left,
            width: width + res.moveX,
            top: top + res.moveY,
            height: height - res.moveY
          }
          const W = maxW - left
          param.width = param.width < minW ? minW : param.width > W ? W : param.width
          const H = height + top
          param.height = param.height < minH ? minH : param.height > H ? H : param.height
        } else if (type === 'rightBottom') {
          param = {
            left: left,
            width: width + res.moveX,
            top: top,
            height: height + res.moveY
          }
          const W = maxW - left
          param.width = param.width < minW ? minW : param.width > W ? W : param.width
          const H = maxH - top
          param.height = param.height < minH ? minH : param.height > H ? H : param.height
        }

        // 定位不能改变操作前的样子
        const minY = top + height - minH
        const minX = left + width - minW
        param.left = param.left < 0 ? 0 : param.left > minX ? minX : param.left
        param.top = param.top < 0 ? 0 : param.top > minY ? minY : param.top
        // 执行
        this.$store.commit('changeModalStyle', {
          app: this.app,
          data: {
            left: param.left + 'px',
            top: param.top + 'px',
            width: param.width + 'px',
            height: param.height + 'px',
          }
        })
      })
    }
  },
}
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  overflow: hidden;
}
.modal-header {
  padding: 0 10px;
  line-height: 44px;
  font-size: 14px;
  color: @color-333;
  background-color: #ececec;
  user-select: none;
}
.modal-body {
  width: 100%;
  height: calc(100% - 45px);
}
.modal-title {
  width: 90%;
  cursor: move;

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    border-radius: 2px;
  }

  span {
    vertical-align: middle;
  }
}
.btn-item {
  width: 14px;
  height: 14px;
  line-height: 16px;
  text-align: center;
  border-radius: 50%;
  cursor: initial;
}
.sx-btn {
  background-color: #f4c250;
  border: 1px solid #d7a344;
}
.sx-btn:hover {
  background-color: #d7a344;
}
.fd-btn {
  background-color: #69ca57;
  border: 1px solid #55a83c;
}
.fd-btn:hover {
  background-color: #55a83c;
}
.close-btn {
  background-color: #ea6b60;
  border: 1px solid #ce4f42;
}
.close-btn:hover {
  background-color: #ce4f42;
}
.top-resize,
.bottom-resize {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background: transparent;
  cursor: ns-resize;
}
.top-resize {
  top: 0;
}
.bottom-resize {
  bottom: 0;
}
.left-resize,
.right-resize {
  position: absolute;
  top: 0;
  height: 100%;
  width: 3px;
  background: transparent;
  cursor: ew-resize;
}
.left-resize {
  left: 0;
}
.right-resize {
  right: 0;
}
.box-resize {
  position: absolute;
  width: 8px;
  height: 8px;
  background: transparent;
  z-index: 10;
}
.left-top-resize {
  top: 0;
  left: 0;
  cursor: nwse-resize;
}
.right-top-resize {
  top: 0;
  right: 0;
  cursor: nesw-resize;
}
.left-bottom-resize {
  left: 0;
  bottom: 0;
  cursor: nesw-resize;
}
.right-bottom-resize {
  right: 0;
  bottom: 0;
  cursor: nwse-resize;
}
</style>