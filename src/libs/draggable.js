// 鼠标拖拽 返回左右上下移动的距离
export const draggable = function (downInfo, callback = undefined, finished = undefined) {
  let res = {
    moveX: 0,
    moveY: 0,
  }
  let clientX = downInfo.clientX
  let clientY = downInfo.clientY

  document.onmousemove = function (e) {
    res.moveX = e.clientX - clientX
    res.moveY = e.clientY - clientY
    callback(res)
  }

  document.onmouseup = function (e) {
    document.onmousemove = null
    document.onmouseup = null
    finished && finished()
  }
}