import { useAppSelector } from "../store/store";
import { Podcast } from "../types";

interface Props {
  podcasts: Array<Podcast>
}

const PodcastList = ({podcasts}: Props) => {

  const filter = useAppSelector(state => state.podcastFilter.filterText)

  return(
    <ul>
      {
        podcasts.filter(podcast => {
          return filter ? podcast.title.toLowerCase().includes(filter.toLowerCase()) || podcast.author.toLowerCase().includes(filter.toLowerCase()) : true
        })
        .map(podcast => {
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