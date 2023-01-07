import { useEffect } from "react";
import PodcastList from "../components/PodcastList";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getPodcasts } from "../services/podcasts";

const Home = () => {

  const [podcasts, setPodcast] = useLocalStorage("podcasts", [])

  useEffect(() => {
    if(podcasts.length < 1) getPodcasts().then(setPodcast)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <PodcastList podcasts={podcasts} />
  );
}

export default Home;