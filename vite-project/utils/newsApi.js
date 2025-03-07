export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const API_KEY = "85c2d5f6c7b44adc97a05c49e4055a61"; // Replace with your actual API key

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
const currentDate = new Date().toISOString().split("T")[0];
const lastWeekDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

export const getNews = (query) => {
  return fetch(
    `${newsApiBaseUrl}?q=${encodeURIComponent(
      query
    )}&apiKey=${API_KEY}&from=${lastWeekDate}&to=${currentDate}&pageSize=100`
  ).then(checkResponse);
};
