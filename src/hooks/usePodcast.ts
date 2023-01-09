import { getPodcasts } from "../services/podcasts";
import { Podcast } from "../types";
import { useLocalStorage } from "./useLocalStorage";

export function usePodcast (podcastId: string) {

  const [allPodcasts, setAllPodcasts] = useLocalStorage("podcasts", [])

  if(allPodcasts.length < 1) getPodcasts().then(setAllPodcasts)

  const podcast = allPodcasts.filter((podcast:Podcast) => podcast.id === podcastId)[0]

  console.log(podcast);

  return podcast
}