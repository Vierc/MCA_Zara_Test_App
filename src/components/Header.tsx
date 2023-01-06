import { Link } from "react-router-dom";
import styles from "../stylesheets/Header.module.css";

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <h1>Podcaster</h1>
        </Link>
      </div>
    </header>
  );
}

export default Header;