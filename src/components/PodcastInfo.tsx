import i18n from "../i18n/index";
import { useParams } from "react-router-dom";
import { usePodcast } from "../hooks/usePodcast";
import styles from "../stylesheets/PodcastInfo.module.css";

const PodcastInfo = () => {

  const { podcastId } = useParams();
  const podcast = usePodcast(podcastId || '');

  return(
    <div>
      <div className={'box-shadow ' + styles.podcastCard}>
        <img 
          className={styles.podcastImage} 
          src={podcast.image} 
          alt={`Podcast ${podcast.title}`} 
        />
        <hr/>
        <h2 className={styles.podcastTitle}>{podcast.title}</h2>
        <p className={styles.podcastAuthor}><i>{i18n.PODCAST.PODCAST_AUTHOR + ' ' + podcast.author}</i></p>
        <hr/>
        <p className={styles.podcastDescriptionTitle}><b>{i18n.PODCAST.DESCRIPTION}</b></p>
        <p className={styles.podcastDescription}><i>{podcast.summary}</i></p>
      </div>
    </div>
  );
}

export default PodcastInfo;