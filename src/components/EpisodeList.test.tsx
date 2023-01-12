import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { setEpisodes } from "../store/features/episodesSlice";
import EpisodeList from "./EpisodeList";

describe("EpisodeList Component", () => {

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

  beforeEach(() => {
    act(() => {
      store.dispatch(setEpisodes(episodes))
    })
  })

  test("renders content", () => {
    const { container } = render(
      <Provider store={store}>
        <EpisodeList />
      </Provider>, {wrapper: BrowserRouter}
    )
    expect(container).toHaveTextContent(episodes.length.toString())
    expect(container).toHaveTextContent(episodes[0].name)
    expect(container).toHaveTextContent(episodes[0].date)
    expect(container).toHaveTextContent(episodes[0].duration)
    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(2)
  })

  test("navigating", () => {
    const history = createMemoryHistory()
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <EpisodeList />
        </Router>
      </Provider>
    )
    fireEvent.click(screen.getByText(episodes[0].name));
    expect(history.location.pathname).toBe('/episode/001');
  })

})