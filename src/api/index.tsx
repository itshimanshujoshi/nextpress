const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

export function getNews() {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch news");
    return res.json();
  });
}
