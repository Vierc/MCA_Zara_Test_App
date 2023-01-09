import { Link } from "react-router-dom";
import styles from "../stylesheets/Header.module.css";
import Loading from "./Loading";

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/">
          <h1>Podcaster</h1>
        </Link>
        <Loading />
      </div>
    </header>
  );
}

export default Header;