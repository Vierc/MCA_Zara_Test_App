import "@testing-library/jest-dom/extend-expect";
import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { setFilter } from "../store/features/filterSlice";
import Search from "./Search";
import userEvent from "@testing-library/user-event";

describe("Search Component", () => {

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
    const { container } = render(
      <Provider store={store}>
        <Search podcasts={podcasts} />
      </Provider>, {wrapper: BrowserRouter}
    )
    expect(container).toHaveTextContent(podcasts.length.toString())
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  test("check input value", () => {
    act(() => {
      store.dispatch(setFilter('testing'))
    })
    render(
      <Provider store={store}>
        <Search podcasts={podcasts} />
      </Provider>, {wrapper: BrowserRouter}
    )
    expect(screen.getByLabelText('Search')).toHaveValue('testing')
  })

  test("handle change", () => {
    render(
      <Provider store={store}>
        <Search podcasts={podcasts} />
      </Provider>, {wrapper: BrowserRouter}
    )
    const input = screen.getByLabelText('Search')
    userEvent.clear(input)
    userEvent.type(input, "filter")
    userEvent.tab()
    expect(screen.getByLabelText('Search')).toHaveValue('filter')
    const { filterText } = store.getState().podcastFilter
    expect(filterText).toBe('filter')
  })

})