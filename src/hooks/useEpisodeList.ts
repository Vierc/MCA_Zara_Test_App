import { getEpisodes } from "../services/podcasts";
import { useLocalStorage } from "./useLocalStorage";

export function useEpisodeList (podcastId: string) {

  const [episodes, setEpisodes] = useLocalStorage("episodes_"+podcastId, [])

  if(episodes.length < 1) getEpisodes(podcastId).then(setEpisodes)

  console.log(episodes);

  return [ episodes ]
}