/*
* Local interfaces 
*/
export interface Podcast {
  id: string
  image: string
  title: string
  author: string
  summary: string
}

export interface Episode {
  id: string
  name: string
  description: string
  url: string
  date: string
  duration: number
}

/*
* Api interfaces 
*/
interface PodcastFromApi {
  id: { 
    attributes: { "im:id": string } 
  }
  "im:image": Array<{ 
    label: string 
    attributes: { height: string }
  }>
  "im:name": { label: string }
  "im:artist": { label: string }
  summary: { label: string }
}

export interface PodcastsResponseFromApi {
  feed: { entry: Array<PodcastFromApi> }
}

interface EpisodeFromApi {
  trackId: number
  trackName: string
  description: string
  episodeUrl: string
  releaseDate: string
  trackTimeMillis: number
}

export interface EpisodesResponseFromApi {
  results: Array<EpisodeFromApi>
}