import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Episode } from "../../types"

interface EpisodesState {
  episodes: Array<Episode>
}

const initialState: EpisodesState = {
  episodes: []
}

export const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers : {
    setEpisodes: (state, action:PayloadAction<Array<Episode>>) => {
      state.episodes = action.payload
    }
  }
})

export const { setEpisodes } = episodesSlice.actions

export default episodesSlice.reducer