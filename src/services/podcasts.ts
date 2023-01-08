import axios from "axios";
import { Podcast, PodcastsResponseFromApi } from "../types";

const apiPostsUrl = process.env.API_POSTS_URL || "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

export const getPodcasts = async () => {
  const apiResponse = await fetchPodcasts();
  return mapFromApiResponse(apiResponse);
}

const fetchPodcasts = async (): Promise<PodcastsResponseFromApi> => {
  const { data } = await axios.get(apiPostsUrl);
  return data;
}

const mapFromApiResponse = (apiResponse: PodcastsResponseFromApi): Array<Podcast> => {
  return apiResponse.feed.entry.map(apiPodcast => {
    const podcast = {
      id: apiPodcast.id.attributes["im:id"],
      image: apiPodcast["im:image"]?.filter(img => img.attributes?.height === "170")[0]?.label,
      title: apiPodcast["im:name"]?.label,
      author: apiPodcast["im:artist"]?.label
    }
    return podcast
  })
}

/* export const getProductById = async (productId) => {
  const { data } = await axios.get(`${API}/products/${productId}`);
  return data;
};

export const getProducts = async () => {
  const { data } = await axios.get(`${API}/products`);
  return data;
};

export const createNewProduct = async (product) => {
  const { data } = await axios.post(`${API}/products`, product);
  return data;
}; */