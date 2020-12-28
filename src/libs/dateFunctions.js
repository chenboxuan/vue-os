// 获取星期
export const getWeek = function (pre = '周') {
  const weeks = ['日', '一', '二', '三', '四', '五', '六']
  const day = new Date().getDay()
  return pre + weeks[day]
}

/**
 * 补零
 * @param {*} num 
 */
export const formatNumber = function (num) {
  const n = num.toString()
  return n[1] ? n : '0' + n
}

/**
 * 时间格式化
 * @param {*} d 
 */
export const forMat = function (d, format = 'yyyy-MM-dd hh:mm:ss', isSp = false) {
  let res = format
  const date = new Date(d)
  const year = date.getFullYear()
  const mouth = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const mi = date.getMinutes()
  const se = date.getSeconds()
  const config = {
    'yyyy': year,
    'MM': mouth,
    'dd': day,
    'hh': hour,
    'mm': mi,
    'ss': se
  }
  for (const key in config) {
    res = res.replace(key, formatNumber(config[key]))
  }
  if (isSp) {
    return {
      desc: hour >= 12 ? '下午' : '上午',
      time: res
    }
  }
  return res
}