import { useEffect } from "react";
import { getPodcasts } from "../services/podcasts";
import { useAppSelector } from "../store/store";
import { Podcast } from "../types";
import { useLocalStorage } from "./useLocalStorage";

export function usePodcasts () {

  const [allPodcasts, setAllPodcast] = useLocalStorage("podcasts", [])
  const { filterText } = useAppSelector(state => state.podcastFilter)

  useEffect(() => {
    if(allPodcasts.length < 1) getPodcasts().then(setAllPodcast)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const podcasts = allPodcasts.filter((podcast: Podcast) => {
    return filterText ? podcast.title.toLowerCase().includes(filterText.toLowerCase()) || podcast.author.toLowerCase().includes(filterText.toLowerCase()) : true
  })

  return {
    podcasts
  }
}