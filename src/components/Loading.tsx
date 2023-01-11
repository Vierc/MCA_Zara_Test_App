import { useAppSelector } from "../store/store";
import styles from "../stylesheets/Loading.module.css";

const Loading = () => {

  const { loading } = useAppSelector(state => state.loading)

  return(
    <div>
      {loading && <div id="loading" className={styles.loading}>
        <div className={styles.loadingDot}></div>
        <div className={styles.loadingDot}></div>
      </div>}
    </div>
  );
}

export default Loading;