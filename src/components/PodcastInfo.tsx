import i18n from "../i18n/index";
import { Link } from "react-router-dom";
import styles from "../stylesheets/PodcastInfo.module.css";
import { useAppSelector } from "../store/store";

const PodcastInfo = () => {

  const { podcast } = useAppSelector(state => state.podcast)

  return(
    <div>
      <div className={'box-shadow ' + styles.podcastCard}>
        <Link to={""}>
          <img 
            className={styles.podcastImage} 
            src={podcast.image} 
            alt={`Podcast ${podcast.title}`} 
          />
        </Link>
        <hr/>
        <Link to={""}>
          <h2 className={styles.podcastTitle}>{podcast.title}</h2>
          <p className={styles.podcastAuthor}><i>{i18n.PODCAST.PODCAST_AUTHOR + ' ' + podcast.author}</i></p>
        </Link>
        <hr/>
        <p className={styles.podcastDescriptionTitle}><b>{i18n.PODCAST.DESCRIPTION}</b></p>
        <p className={styles.podcastDescription}><i>{podcast.summary}</i></p>
      </div>
    </div>
  );
}

export default PodcastInfo;