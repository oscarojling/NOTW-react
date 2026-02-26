import { articles } from "../../data/data.js";
import placeholder from "../../assets/images/soccer.jpeg";
import styles from './MainNews.module.css'

const MainNewsArticle = () => {
  const mainArticle = articles[0];
  return (
    <div className={styles.MainArticle}>
      <img src={placeholder} alt={mainArticle.headline} />
      <h2>{mainArticle.headline}</h2>
      <p>{mainArticle.deck}</p>
      <span>{mainArticle.category}</span>
    </div>
  );
};

export default MainNewsArticle;
