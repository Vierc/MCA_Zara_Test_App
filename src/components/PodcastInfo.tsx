import i18n from "../i18n/index";
import { useParams } from "react-router-dom";
import { usePodcast } from "../hooks/usePodcast";

const PodcastInfo = () => {

  const { podcastId } = useParams();
  const podcast = usePodcast(podcastId || '');

  return(
    <div>
      <img src={podcast.image} alt={`Podcast ${podcast.title}`} />
      <h4>{podcast.title.toUpperCase()}</h4>
      <p>{i18n.HOME.PODCAST_AUTHOR + ' ' + podcast.author}</p>
    </div>
  );
}

export default PodcastInfo;