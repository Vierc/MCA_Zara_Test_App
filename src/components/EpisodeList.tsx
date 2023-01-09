import { Link, useParams } from "react-router-dom";
import { useEpisodeList } from "../hooks/useEpisodeList";
import { Episode } from "../types";
import i18n from "../i18n/index";
import styles from "../stylesheets/EpisodeList.module.css";

const EpisodeList = () => {

  const { podcastId } = useParams();
  const [ episodes ] = useEpisodeList(podcastId || '')

  return(
    <div>
      <h3 className={'box-shadow ' + styles.episodesHeader}>
        <span>{i18n.PODCAST.EPISODES} </span> 
        {episodes && episodes.length >= 200 ? '+'+episodes.length : episodes.length}
      </h3>
      <div className={'box-shadow ' + styles.customTable}>
        <table>
          <thead>
            <tr>
              <th>{i18n.PODCAST.TABLE_TITLE}</th>
              <th>{i18n.PODCAST.TABLE_DATE}</th>
              <th>{i18n.PODCAST.TABLE_DURATION}</th>
            </tr>
          </thead>
          <tbody>
            {
              episodes && episodes.map((episode: Episode) => {
                return (
                  <tr key={episode.id}>
                    <td>
                      <Link to={"/podcast/"+podcastId+"/episode/"+episode.id}>
                        {episode.name}
                      </Link>
                    </td>
                    <td>{episode.date}</td>
                    <td>{episode.duration}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EpisodeList;