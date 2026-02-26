import CategorySection from "../CategorySection";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={styles.SecondSection}>
      <CategorySection category="world" limit={3} />
      <CategorySection category="sweden" limit={3} />
      <CategorySection category="sport" limit={3} />
      <CategorySection category="entertainment" limit={3} />
      <CategorySection category="crime" limit={3} />
    </div>
  );
};
export default SecondSection;
