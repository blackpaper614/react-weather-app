export const picMatch = (text, time, type = 1) => {
  let now = new Date(time);
  let prefix = ''
  // 匹配白天、黑夜
  if(text && type === 1) {
    prefix = (now.getHours() <= 6 || now.getHours() >= 18) ? 'night' : 'day'
  } else {
    prefix = 'day'
  }
  // 根据文案映射图片地址
  let baseType = ''
  if (text.includes('雨')) {
    baseType = 'rain';
  } else if(text.includes('雪')) {
    baseType = 'snow';
  } else if(text.includes('雷')) {
    baseType = 'storm';
  } else if(text.includes('风')) {
    baseType = 'wind';
  } else {
    baseType = 'peace';
  }
  return prefix + '-' + baseType
}