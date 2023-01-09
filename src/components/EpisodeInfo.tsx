import { useParams } from "react-router-dom";
import { useEpisode } from "../hooks/useEpisode";
import styles from "../stylesheets/EpisodeInfo.module.css";

const EpisodeInfo = () => {

  const { podcastId, episodeId } = useParams();
  const episode = useEpisode(podcastId || '', episodeId || '')

  return(
    <div>
      <div className={'box-shadow ' + styles.episodeBox}>
        <h3>{episode.name}</h3>
        <p className={styles.episodeDescription} dangerouslySetInnerHTML={{__html: episode.description}}></p>
        <hr/>
        <audio controls className={styles.episodePlayer}>
          <source src={episode.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default EpisodeInfo;