import { Link, useParams } from "react-router-dom";
import { useEpisodeList } from "../hooks/useEpisodeList";
import { Episode } from "../types";
import i18n from "../i18n/index";

const EpisodeList = () => {

  const { podcastId } = useParams();
  const [ episodes ] = useEpisodeList(podcastId || '')

  return(
    <div>
      <p>Episodes {episodes && episodes.length >= 200 ? '+'+episodes.length : episodes.length}</p>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Duration</th>
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
  );
}

export default EpisodeList;