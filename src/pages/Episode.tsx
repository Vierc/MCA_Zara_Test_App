import EpisodeInfo from "../components/EpisodeInfo";
import PodcastInfo from "../components/PodcastInfo";
import styles from "../stylesheets/Podcast.module.css";

const Episode = () => {

  return(
    <div className={styles.podcastGrid}>
      <PodcastInfo />
      <EpisodeInfo />
    </div>
  );
}

export default Episode;