// 全屏及退出全屏 full是否全屏
export const handleFullScreen = function (full = false) {
  let element = document.documentElement;
  if (full) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
  }
}

// 获取元素到浏览器最左边或最上边距离
export const getOffset = function (node, type = 'left') {
  let obj = node
  let res = 0
  while (obj !== null) {
    res += type === 'left' ? obj.offsetLeft : obj.offsetTop
    obj = obj.offsetParent
  }
  return res
}