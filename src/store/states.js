const state = {
  // 首页应用列表 show控制modal显示隐藏
  appList: [
    {
      id: 1, name: '我的云盘', logo: 'https://file.chenboxuan.cn/hexo-blog/cover/default.jpg',
      type: 1,
      modalInfo: {
        visible: false, number: 0, zIndex: 100, width: '78%', top: '10%', left: '10%', component: 'MyCloud', isFull: false, show: false, height: '480px'
      }
    },
    {
      id: 2, name: '我的项目', logo: 'https://file.chenboxuan.cn/hexo-blog/cover/default.jpg',
      show: false,
      type: 1,
      modalInfo: {
        visible: false, number: 0, zIndex: 100, width: '100%', top: '0', left: 0, component: 'MyProject', isFull: true, show: false, height: '100%'
      }
    },
    {
      id: 3, name: '应用市场', logo: 'https://file.chenboxuan.cn/hexo-blog/cover/default.jpg',
      type: 1,
      modalInfo: {
        visible: false, number: 0, zIndex: 100, width: '78%', top: '10%', left: '10%', component: 'MyCloud', isFull: false, show: false, height: '480px'
      }
    },
  ],
  // 当前操作的app
  actionApp: {}
}

export default state
