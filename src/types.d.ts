export interface Podcast {
  id: string
  image: string
  title: string
  author: string
}

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
}

export interface PodcastsResponseFromApi {
  feed: { entry: Array<PodcastFromApi> }
}