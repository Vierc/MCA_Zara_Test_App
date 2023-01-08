import { Link } from "react-router-dom";
import { Podcast } from "../types";
import styles from "../stylesheets/Podcasts.module.css";
import i18n from "../i18n/index";

interface Props {
  podcasts: Array<Podcast>
}

const PodcastList = ({podcasts}: Props) => {

  return(
    <ul className={styles.podcastsGrid}>
      {
        podcasts.map(podcast => {
          return (
            <li key={podcast.id} className={styles.podcastList}>
              <Link to={"/podcast/" + podcast.id}>
                <div className={styles.podcastBox}>
                  <img className={styles.podcastImg} src={podcast.image} alt={`Podcast ${podcast.title}`} />
                  <h4>{podcast.title.toUpperCase()}</h4>
                  <p className={styles.podcastAuthor}>{i18n.HOME.PODCAST_AUTHOR + ' ' + podcast.author}</p>
                </div>
              </Link>
            </li>
          )
        })
      }
    </ul>
  );
}

export default PodcastList;