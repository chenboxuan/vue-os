const mutations = {
  // app 开启与关闭
  changeAppModal: (state, params) => {
    const number = state.appList.map(item => {
      return item.modalInfo.number
    }).sort((a, b) => {
      return b - a
    })[0]

    state.appList.forEach(item => {
      if (item.id === params.data.id) {
        item.modalInfo.visible = params.show
        item.modalInfo.isFull = item.modalInfo.isFull
        item.modalInfo.show = params.show
        if (params.show) item.modalInfo.number = number + 1
      }
    })
  },

  // 当前操作的app赋值
  changeActionApp: (state, data) => {
    state.actionApp = data
  },

  // 改变app zIndex
  changeAppZindex: (state, data) => {
    let num = 0
    state.appList.forEach(item => {
      if (!num || item.modalInfo.zIndex > num) num  = item.modalInfo.zIndex
    })
    state.appList.forEach(item => {
      if (item.id === data.id) {
        item.modalInfo.zIndex = num + 1
      }
    })
  },

  // 修改app modal显示隐藏
  changeAppVisible: (state, params) => {
    state.appList.forEach(item => {
      if (item.id === params.data.id) {
        item.modalInfo.visible = params.show
      }
    })
  },

  // 挑选出zIndex最大的app设置为actionApp 或者清空actionApp
  modifyActionApp: (state) => {
    let obj = {}
    state.appList.forEach(item => {
      if (item.modalInfo.visible && (!obj.modalInfo || item.modalInfo.zIndex > obj.modalInfo.zIndex)) obj = item
    })
    state.actionApp = obj
  },

  // 修改modal相关的style样式
  changeModalStyle: (state, params) => {
    state.appList.forEach(item => {
      if (item.id === params.app.id) {
        Object.keys(params.data).forEach(key => {
          item.modalInfo[key] = params.data[key]
        })
      }
    })
  }
}

export default mutations
