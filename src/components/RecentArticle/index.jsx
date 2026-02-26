const RecentArticle = (props) => {
  return (
    <div>
      <h3>{props.article.headline}</h3>
      <p>{props.article.deck}</p>
      <span>{props.article.category}</span>
    </div>
  );
};

export default RecentArticle
