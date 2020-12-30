<template>
  <div>
    <app-modal
      v-for="item of $store.state.appList"
      :key="item.id"
      :app="item"
    >
      <template #body>
        <component :is="item.modalInfo.component" :app="item"></component>
      </template>
    </app-modal>
  </div>
</template>

<script>
import AppModal from '@/components/common/AppModal'
import MyCloud from '@/components/app/MyCloud'
import IframePage from '@/components/app/IframePage'
import ApplicationMarket from '@/components/app/ApplicationMarket'

export default {
  name: 'ManageApp',
  components: {
    AppModal,
    MyCloud,
    IframePage,
    ApplicationMarket,
  },
}
</script>

<style lang="less" scoped>
</style>