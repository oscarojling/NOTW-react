import instagram from "../../assets/images/instagram_logo.png";
import linkedin from "../../assets/images/linkedin_logo.png";
import tiktok from "../../assets/images/tiktok_logo.png";
import x from "../../assets/images/x_logo.png";
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <span>
          <img src={instagram} alt="instagram" width="24" />
          <img src={linkedin} alt="linkedin" width="24" />
          <img src={tiktok} alt="tiktok" width="24" />
          <img src={x} alt="x" width="24" />
        </span>
        <h1>Oscar's react website</h1>
        <span>12345</span>
      </div>
      <nav>
        <span>Home</span>
        <span>World</span>
        <span>Sweden</span>
        <span>Sport</span>
        <span>Entertainment</span>
        <span>Crime</span>
        <span>Monday, 25 feb 2026</span>
      </nav>
    </header>
  );
};
export default Header;
