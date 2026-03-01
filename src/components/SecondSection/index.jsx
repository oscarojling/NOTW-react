import CategorySection from "../CategorySection";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  const categories = ["world", "sweden", "sport", "entertainment", "crime"]
  return (
    <div className={styles.SecondSection}>
      {categories.map((category, index) => (
      <CategorySection key={index} category={category} limit={3} direction="row" />
    ))}
    </div>
  );
};
export default SecondSection;
