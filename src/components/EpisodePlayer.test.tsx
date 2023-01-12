import "@testing-library/jest-dom/extend-expect";
import { act, queryByAttribute, render } from "@testing-library/react";
import { Route, Router, Routes } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { setEpisodes } from "../store/features/episodesSlice";
import EpisodePlayer from "./EpisodePlayer";

describe("EpisodePlayer Component", () => {

  const episodes = [
    {
      id: "001",
      name: "Name",
      description: "Description",
      url: "https://url/",
      date: "1/1/2023",
      duration: "01:30"
    }
  ]

  test("renders content", () => {
    const getById = queryByAttribute.bind(null, 'id');
    const history = createMemoryHistory()
    history.location.pathname = '/episode/001';
    act(() => {
      store.dispatch(setEpisodes(episodes))
    })
    const { container } = render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Routes>
            <Route path="/episode/:episodeId" element={<EpisodePlayer />} />
          </Routes>
        </Router>
      </Provider>
    )
    expect(container).toHaveTextContent(episodes[0].name)
    expect(container).toHaveTextContent(episodes[0].description)
    const audio = getById(container, 'audioPlayer') as HTMLAudioElement
    expect(audio.src).toBe(episodes[0].url)
  })

})