import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import PodcastList from "./PodcastList";

describe("PodcastList Component", () => {
  
  const podcasts = [
    {
      id: "001",
      image: "https://url/",
      title: "Title",
      author: "Author"
    }
  ]
  const { container } = render(<PodcastList podcasts={podcasts} />)

  test("renders content", () => {
    expect(container).toHaveTextContent(podcasts[0].title)
    expect(container).toHaveTextContent(podcasts[0].author)
    const img = screen.getByAltText("Podcast "+ podcasts[0].title) as HTMLImageElement
    expect(img.src).toBe(podcasts[0].image)
  })

})