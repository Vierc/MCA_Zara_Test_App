import { useEffect } from "react";
import { getPodcasts } from "../services/podcasts";
import { setLoading } from "../store/features/loadingSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Podcast } from "../types";
import { useLocalStorage } from "./useLocalStorage";

export function usePodcastList () {

  const [ allPodcasts, setAllPodcasts ] = useLocalStorage("podcasts", [])
  const { filterText } = useAppSelector(state => state.podcastFilter)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      if(allPodcasts.length < 1) {
        const apiPodcasts = await getPodcasts()
        await setAllPodcasts(apiPodcasts)
      }
      dispatch(setLoading(false))
    }
    fetchData().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const podcasts = allPodcasts.filter((podcast: Podcast) => {
    return filterText ? podcast.title.toLowerCase().includes(filterText.toLowerCase()) || podcast.author.toLowerCase().includes(filterText.toLowerCase()) : true
  })

  return {
    podcasts
  }
}