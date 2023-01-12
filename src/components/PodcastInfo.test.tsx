import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { setPodcast } from "../store/features/podcastSlice";
import { act } from "react-dom/test-utils";
import PodcastInfo from "./PodcastInfo";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";

describe("PodcastInfo Component", () => {

  const podcast = {
    id: "001",
    image: "https://url/",
    title: "Title",
    author: "Author",
    summary: "Summary"
  }

  beforeEach(() => {
    act(() => {
      store.dispatch(setPodcast(podcast))
    })
  })
  
  test("renders content", () => {
    const { container } = render(
      <Provider store={store}>
        <PodcastInfo />
      </Provider>, {wrapper: BrowserRouter}
    )
    const img = screen.getByAltText("Podcast "+ podcast.title) as HTMLImageElement
    expect(img.src).toBe(podcast.image)
    expect(container).toHaveTextContent(podcast.title)
    expect(container).toHaveTextContent(podcast.author)
    expect(container).toHaveTextContent(podcast.summary)
  })

  test("navigating", () => {
    const history = createMemoryHistory()
    history.location.pathname = '/test'
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <PodcastInfo />
        </Router>
      </Provider>
    )
    fireEvent.click(screen.getByAltText("Podcast "+ podcast.title));
    expect(history.location.pathname).toBe('/');
    history.location.pathname = '/test'
    fireEvent.click(screen.getByText(podcast.title));
    expect(history.location.pathname).toBe('/');
  })

})