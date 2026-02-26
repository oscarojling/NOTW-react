import placeholder from '../../assets/images/soccer.jpeg'
import styles from './SmallArticle.module.css'

const SmallArticle = (props) => {
  return (
    <div className={styles.article}>
      <img src={placeholder} alt={props.article.headline} />
      <h3>{props.article.headline}</h3>
      <p>{props.article.deck}</p>
    </div>
  );
};

export default SmallArticle
