import axios from "axios";

const URL = "https://devapi.qweather.com/v7/weather/now?";
const API_KEY = "03f4c62faffe48bba0a0d2d1dad796b3";

export default async function FetchWeather(location) {
  const { data } = await axios.get(URL, {
    params: {
      location: location,
      key: API_KEY,
    },
  });
  return data;
}