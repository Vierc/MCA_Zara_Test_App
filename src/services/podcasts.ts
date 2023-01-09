import axios from "axios";
import { Episode, EpisodesResponseFromApi, Podcast, PodcastsResponseFromApi } from "../types";

const apiPodcastsUrl = process.env.API_PODCASTS_URL || "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
const apiEpisodesUrl = process.env.API_EPISODES_URL || "https://cors-anywhere.herokuapp.com/itunes.apple.com/";

export const getPodcasts = async () => {
  const apiResponse = await fetchPodcasts();
  return mapPodcastsFromApiResponse(apiResponse);
}

export const getEpisodes = async (podcastId: string) => {
  const apiResponse = await fetchEpisodes(podcastId);
  return mapEpisodesFromApiResponse(apiResponse);
}

const fetchPodcasts = async (): Promise<PodcastsResponseFromApi> => {
  const { data } = await axios.get(apiPodcastsUrl);
  return data;
}

const fetchEpisodes = async (podcastId: string): Promise<EpisodesResponseFromApi> => {
  const { data } = await axios.get(`${apiEpisodesUrl}lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=200`);
  return data;
}

const mapPodcastsFromApiResponse = (apiResponse: PodcastsResponseFromApi): Array<Podcast> => {
  return apiResponse.feed.entry.map(apiPodcast => {
    const podcast = {
      id: apiPodcast.id.attributes["im:id"],
      image: apiPodcast["im:image"]?.filter(img => img.attributes?.height === "170")[0]?.label,
      title: apiPodcast["im:name"]?.label,
      author: apiPodcast["im:artist"]?.label,
      summary: apiPodcast.summary?.label,
    }
    return podcast
  })
}

const mapEpisodesFromApiResponse = (apiResponse: EpisodesResponseFromApi): Array<Episode> => {
  return apiResponse.results.filter(result => result.episodeUrl).map(apiEpisode => {
    const episode = {
      id: apiEpisode.trackId.toString(),
      name: apiEpisode.trackName,
      description: apiEpisode.description,
      url: apiEpisode.episodeUrl,
      date: apiEpisode.releaseDate,
      duration: apiEpisode.trackTimeMillis
    }
    return episode
  })
}