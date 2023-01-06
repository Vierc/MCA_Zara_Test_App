import { useEffect, useState } from "react";
import PodcastList from "../components/PodcastList";
import { getPodcasts } from "../services/podcasts";
import { Podcast } from "../types";

interface HomeState {
  podcasts: Array<Podcast>
}

const Home = () => {

  const [podcasts, setPodcast] = useState<HomeState["podcasts"]>([])

  useEffect(() => {
    getPodcasts().then(setPodcast)
  }, [])

  return(
    <PodcastList podcasts={podcasts} />
  );
}

export default Home;