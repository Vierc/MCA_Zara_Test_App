import { Outlet, useParams } from "react-router-dom";
import PodcastInfo from "../components/PodcastInfo";
import { usePodcast } from "../hooks/usePodcast";
import styles from "../stylesheets/Podcast.module.css";

const Podcast = () => {

  const { podcastId } = useParams()
  usePodcast(podcastId || '')

  return(
    <div className={styles.podcastGrid}>
      <PodcastInfo />
      <Outlet />
    </div>
  );
}

export default Podcast;