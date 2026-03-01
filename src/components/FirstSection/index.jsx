import CategorySection from "../CategorySection";
import Recent from "../RecentSection";
import MainNewsArticle from "../MainNewsArticle";
import styles from './FirstSection.module.css'


const FirstSection = () => {
  return (
    <div className={styles.FirstSection}>
      <Recent />
      <MainNewsArticle />
      <CategorySection category="sport" limit={2} direction="column" />
    </div>
  )
}
export default FirstSection