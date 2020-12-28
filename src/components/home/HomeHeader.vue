<template>
  <div class="home-header select-none">
    <div class="u-flex u-row-between">
      <header-nav></header-nav>

      <div class="u-flex">
        <div class="time-item">{{ week }}</div>
        <div class="time-item">{{ timeInfo.desc }}{{ timeInfo.time }}</div>
        <div class="name-item u-rela">
          <span>Power By VueOS</span>
          <span class="name-sup">TM</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from './HeaderNav'
import { getWeek, forMat } from '@libs/dateFunctions'

export default {
  name: 'HomeHeader',
  components: {
    HeaderNav
  },
  data () {
    return {
      week: '',
      timeInfo: {
        desc: '',
        time: ''
      },
      timer: null
    }
  },
  created () {
    this.week = getWeek()
    this.getTimeInfo()
    this.timer = setInterval(() => {
      this.getTimeInfo()
    }, 5000)
  },
  beforeMount () {
    this.timer = null
  },
  methods: {
    getTimeInfo () {
      this.timeInfo = forMat(new Date(), 'hh:mm', true)
    }
  },
}
</script>

<style lang="less" scoped>
.home-header {
  padding: 0 10px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  color: @color-333;
  background: rgba(255, 255, 255, 0.5);
}
.time-item {
  padding: 0 5px;
}
sup {
  font-size: 12px;
}
.name-item {
  padding: 0 15px 0 5px;
}
.name-sup {
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 12px;
  transform: scale(0.7);
}
</style>