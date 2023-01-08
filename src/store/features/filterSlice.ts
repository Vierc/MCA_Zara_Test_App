import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
  filterText: string
}

const initialState: FilterState = {
  filterText: ''
}

export const filterSlice = createSlice({
  name: "podcastFilter",
  initialState,
  reducers : {
    setFilter: (state, action:PayloadAction<string>) => {
      state.filterText = action.payload
    }
  }
})

export const { setFilter } = filterSlice.actions

export default filterSlice.reducer