import RecentArticle from "../RecentArticle/index.jsx";
import { articles } from "../../data/data.js";

const Recent = () => {
  const categories = ["world", "sweden", "entertainment", "crime"]

  const recent = categories.map(category =>
     articles.find(article => article.category === category))
  

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