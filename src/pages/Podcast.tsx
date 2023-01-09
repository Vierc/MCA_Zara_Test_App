import { Outlet } from "react-router-dom";
import PodcastInfo from "../components/PodcastInfo";
import styles from "../stylesheets/Podcast.module.css";

const Podcast = () => {

  return(
    <div className={styles.podcastGrid}>
      <PodcastInfo />
      <Outlet />
    </div>
  );
}

export default Podcast;