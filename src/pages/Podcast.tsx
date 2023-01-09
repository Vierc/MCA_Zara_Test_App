import EpisodeList from "../components/EpisodeList";
import PodcastInfo from "../components/PodcastInfo";
import styles from "../stylesheets/Podcast.module.css";

const Podcast = () => {

  return(
    <div className={styles.podcastGrid}>
      <PodcastInfo />
      <EpisodeList />
    </div>
  );
}

export default Podcast;