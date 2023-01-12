import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/store";
import styles from "../stylesheets/Episode.module.css";
import { Episode } from "../types";

const EpisodePlayer = () => {

  const { episodeId } = useParams();
  const { episodes } = useAppSelector(state => state.episodes)
  const episode = episodes.filter( episode => episode.id === episodeId )[0] || {} as Episode

  return(
    <div>
      <div className={'box-shadow ' + styles.episodeBox}>
        <h3>{episode.name}</h3>
        <p className={styles.episodeDescription} dangerouslySetInnerHTML={{__html: episode.description}}></p>
        <hr/>
        <audio controls className={styles.episodePlayer}>
          <source id="audioPlayer" src={episode.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default EpisodePlayer;