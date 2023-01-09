import { useEffect } from "react";
import { getEpisodes, getPodcasts } from "../services/podcasts";
import { setEpisodes } from "../store/features/episodesSlice";
import { setLoading } from "../store/features/loadingSlice";
import { setPodcast } from "../store/features/podcastSlice";
import { useAppDispatch } from "../store/store";
import { Podcast } from "../types";
import { useLocalStorage } from "./useLocalStorage";

export function usePodcast (podcastId: string) {

  const [ podcasts, setPodcasts ] = useLocalStorage("podcasts", [])
  const [ allEpisodes, setAllEpisodes ] = useLocalStorage("episodes_"+podcastId, [])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      let podcast = podcasts.filter((podcast: Podcast) => podcast.id === podcastId)[0];
      if (podcasts.length < 1) {
        const apiPodcasts = await getPodcasts()
        await setPodcasts(apiPodcasts)
        podcast = apiPodcasts.filter((podcast: Podcast) => podcast.id === podcastId)[0];
      }
      if (podcast) dispatch(setPodcast(podcast))
      if (allEpisodes.length < 1) {
        const apiEpisodes = await getEpisodes(podcastId)
        setAllEpisodes(apiEpisodes)
        dispatch(setEpisodes(apiEpisodes))
      } else {
        dispatch(setEpisodes(allEpisodes))
      }
      dispatch(setLoading(false))
    }
    fetchData().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

}