import CategorySection from "../CategorySection";
import styles from "./SecondSection.module.css";

const SecondSection = () => {
  return (
    <div className={styles.SecondSection}>
      <CategorySection category="world" limit={3} direction="row" />
      <CategorySection category="sweden" limit={3} direction="row" />
      <CategorySection category="sport" limit={3} direction="row" />
      <CategorySection category="entertainment" limit={3} direction="row" />
      <CategorySection category="crime" limit={3} direction="row" />
    </div>
  );
};
export default SecondSection;
