import { useEffect } from "react";
import PodcastList from "../components/PodcastList";
import Search from "../components/Search";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getPodcasts } from "../services/podcasts";

const Home = () => {

  const [podcasts, setPodcast] = useLocalStorage("podcasts", [])

  useEffect(() => {
    if(podcasts.length < 1) getPodcasts().then(setPodcast)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
    <div>
      <Search />
      <PodcastList podcasts={podcasts} />
    </div>
  );
}

export default Home;