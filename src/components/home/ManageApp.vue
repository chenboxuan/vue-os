<template>
  <div>
    <template v-for="item of $store.state.appList">
      <app-modal :key="item.id" :visible="item.modalInfo.visible" v-if="item.modalInfo.visible" :app="item">
        <template #body>
          <component :is="item.modalInfo.component"></component>
        </template>
      </app-modal>
    </template>
  </div>
</template>

<script>
import AppModal from '@/components/common/AppModal'
import MyCloud from '@/components/app/MyCloud'
import MyProject from '@/components/app/MyProject'

export default {
  name: 'ManageApp',
  components: {
    MyCloud,
    AppModal,
    MyProject,
  },
}
</script>

<style lang="less" scoped>
</style>