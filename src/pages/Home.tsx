import PodcastList from "../components/PodcastList";
import Search from "../components/Search";
import { usePodcastList } from "../hooks/usePodcastList";

const Home = () => {

  const { podcasts } = usePodcastList()

  return(
    <div>
      <Search podcasts={podcasts} />
      <PodcastList podcasts={podcasts} />
    </div>
  );
}

export default Home;