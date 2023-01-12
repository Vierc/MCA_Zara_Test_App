import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import PodcastList from "./PodcastList";

describe("PodcastList Component", () => {

  const podcasts = [
    {
      id: "001",
      image: "https://url/",
      title: "Title",
      author: "Author",
      summary: "Summary"
    }
  ]
  
  test("renders content", () => {
    const { container } = render(<PodcastList podcasts={podcasts} />, {wrapper: BrowserRouter})
    expect(container).toHaveTextContent(podcasts[0].title.toUpperCase())
    expect(container).toHaveTextContent(podcasts[0].author)
    const img = screen.getByAltText("Podcast "+ podcasts[0].title) as HTMLImageElement
    expect(img.src).toBe(podcasts[0].image)
  })
  
  test("navigating", () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <PodcastList podcasts={podcasts} />
      </Router>
    )
    fireEvent.click(screen.getByText(podcasts[0].title.toUpperCase()));
    expect(history.location.pathname).toContain('/podcast/001');
  })

})