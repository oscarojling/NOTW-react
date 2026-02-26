import RecentArticle from "../RecentArticle/index.jsx";
import { articles } from "../../data/data.js";

const Recent = () => {
  const recent = articles.filter(article => article.category !== "sport").slice(0, 4)

return (
  <div>
    <h2>Recent News</h2>
    {recent.map((article, index) => (
      <RecentArticle key={index} article={article} />
    ))}
  </div>
)

}

export default Recent