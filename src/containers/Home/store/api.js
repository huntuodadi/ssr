export const fetchNews = () => {
  return fetch('/api/news.json').then((res) => {
    return res.json();
  })
}
