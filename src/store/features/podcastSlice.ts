import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Podcast } from "../../types"

interface PodcastState {
  podcast: Podcast
}

const initialState: PodcastState = {
  podcast: {
    id: '',
    image: '',
    title: '',
    author: '',
    summary: ''
  }
}

export const podcastSlice = createSlice({
  name: "podcast",
  initialState,
  reducers : {
    setPodcast: (state, action:PayloadAction<Podcast>) => {
      state.podcast = action.payload
    }
  }
})

export const { setPodcast } = podcastSlice.actions

export default podcastSlice.reducer