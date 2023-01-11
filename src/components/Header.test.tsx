import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "@remix-run/router";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Header from "./Header";

describe("Header Component", () => {
  
  test("renders content", () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    )
    expect(container).toHaveTextContent('Podcaster')
  })
  
  test("navigating", () => {
    const history = createMemoryHistory()
    history.location.pathname = '/test';
    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <Header />
        </Router>
      </Provider>
    )
    fireEvent.click(screen.getByText('Podcaster'));
    expect(history.location.pathname).toBe('/');
  })

})