import { getEpisodes } from "../services/podcasts";
import { Episode } from "../types";
import { useLocalStorage } from "./useLocalStorage";


export function useEpisode (podcastId: string, episodeId: string) {

  const [allEpisodes, setAllEpisodes] = useLocalStorage("episodes_"+podcastId, [])

  if(allEpisodes.length < 1) getEpisodes(podcastId).then(setAllEpisodes)

  const episode = allEpisodes.filter((episode:Episode) => episode.id === episodeId)[0]

  console.log(episode);

  return episode
}
