<template>
  <div class="home-footer select-none u-flex u-row-between u-col-center">
    <div class="u-flex u-col-center tab-wrap">
      <div class="qp-btn" @click="handleFullScreen">
        <svg
          t="1608887862053"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8386"
          width="20"
          height="20"
          v-if="fullscreen"
        >
          <path
            d="M196.219944 256.53655H43.240829a42.659147 42.659147 0 1 0 0 85.318294h255.954884a42.659147 42.659147 0 0 0 42.659147-42.659147v-255.954884a42.659147 42.659147 0 0 0-85.318294 0v152.979115L73.423029 13.106392a42.659147 42.659147 0 1 0-60.296145 60.337098l183.09306 183.09306z m571.243522-60.316622V43.240813a42.659147 42.659147 0 1 0-85.318294 0v255.954884a42.659147 42.659147 0 0 0 42.659147 42.659147h255.954884a42.659147 42.659147 0 1 0 0-85.318294h-152.979115l183.113536-183.113537a42.659147 42.659147 0 1 0-60.337098-60.296145l-183.09306 183.09306z m-571.243522 571.243522H43.240829a42.659147 42.659147 0 1 1 0-85.318294h255.954884a42.659147 42.659147 0 0 1 42.659147 42.659147v255.954884a42.659147 42.659147 0 1 1-85.318294 0v-152.979115l-183.113537 183.113536a42.659147 42.659147 0 1 1-60.296145-60.337098l183.09306-183.09306z m571.243522 60.316622v152.979115a42.659147 42.659147 0 1 1-85.318294 0v-255.954884a42.659147 42.659147 0 0 1 42.659147-42.659147h255.954884a42.659147 42.659147 0 1 1 0 85.318294h-152.979115l183.113536 183.113537a42.659147 42.659147 0 1 1-60.337098 60.296145l-183.09306-183.09306z"
            fill="#ffffff"
            p-id="8387"
          ></path>
        </svg>

        <svg
          t="1608887125300"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6707"
          width="20"
          height="20"
          v-else
        >
          <path
            d="M162.133333 162.133333v153.6H85.333333V85.333333h234.666667v76.8H162.133333z m699.733334 0h-153.6V85.333333H938.666667v234.666667h-76.8V162.133333z m0 699.733334v-153.6H938.666667V938.666667h-234.666667v-76.8h157.866667z m-699.733334 0h153.6V938.666667H85.333333v-234.666667h76.8v157.866667zM256 256h512v512H256V256z"
            p-id="6708"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
      <div class="divider"></div>
      <tab-list></tab-list>
    </div>

    <div class="u-flex u-col-center u-row-right right-wrap">
      <footer-search></footer-search>
      <img
        class="logo"
        src="https://file.chenboxuan.cn/hexo-blog/cover/default.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import TabList from './TabList'
import FooterSearch from './FooterSearch'
import { handleFullScreen } from '@libs/util'

export default {
  name: 'HomeFooter',
  components: {
    TabList,
    FooterSearch,
  },
  data () {
    return {
      fullscreen: false
    }
  },
  methods: {
    handleFullScreen () {
      let element = document.documentElement;
      handleFullScreen(this.fullscreen)
      this.fullscreen = !this.fullscreen;
    }
  },
}
</script>

<style lang="less" scoped>
.home-footer {
  padding: 0 10px;
  line-height: 46px;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
}
.tab-wrap {
  width: 72%;
}
.qp-btn {
  padding: 0 15px;

  .icon {
    vertical-align: middle;
  }
}
.divider {
  height: 14px;
  width: 1px;
  background-color: #fff;
}
.right-wrap {
  width: 28%;
}
.logo {
  height: 28px;
  vertical-align: middle;
}
</style>