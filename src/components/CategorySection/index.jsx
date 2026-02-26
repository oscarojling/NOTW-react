import SmallArticle from "../smallArticle/index.jsx";
import { articles } from "../../data/data.js";
import styles from "./CategorySection.module.css"

const CategorySection = (props) => {
  const filtered = articles.filter(
    (article) => article.category === props.category,
  ).slice(0, props.limit);

  return (
    <div className={props.direction ===  "row" ? styles.row : styles.column}>
      <h2>{props.category}</h2>
      <div className={styles.articles}>
      {filtered.map((article, index) => (
        <SmallArticle key={index} article={article} />
      ))}
      </div>
    </div>
  );
};

export default CategorySection;
