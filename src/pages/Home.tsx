import PodcastList from "../components/PodcastList";
import Search from "../components/Search";
import { usePodcasts } from "../hooks/usePodcasts";

const Home = () => {

  const { podcasts } = usePodcasts()

  return(
    <div>
      <Search podcasts={podcasts} />
      <PodcastList podcasts={podcasts} />
    </div>
  );
}

export default Home;