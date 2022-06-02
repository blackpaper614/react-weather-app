import axios from "axios";

// 天气API的个人用户标识
const API_KEY = "03f4c62faffe48bba0a0d2d1dad796b3";

export default async function FetchWeather(type = 'now') { 
  // 根据type区分请求当前或未来天气
  const URL = `https://devapi.qweather.com/v7/weather/${type}?`;
  const { data } = await axios.get(URL, {
    params: {
      location: '101210106',
      key: API_KEY,
    },
  });
  return data;
}