import { Podcast } from "../types";

interface Props {
  podcasts: Array<Podcast>
}

const PodcastList = ({podcasts}: Props) => {

  return(
    <ul>
      {
        podcasts.map(podcast => {
          return (
            <li key={podcast.id}>
              <img src={podcast.image} alt={`Podcast ${podcast.title}`} />
              <h4>{podcast.title}</h4>
              <p>{podcast.author}</p>
            </li>
          )
        })
      }
    </ul>
  );
}

export default PodcastList;