import "@testing-library/jest-dom/extend-expect";
import { queryByAttribute, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Loading from "./Loading";

describe("Loading Component", () => {
  
  test("show/hide loading wheel", () => {
    const getById = queryByAttribute.bind(null, 'id');
    const { container } = render(
      <Provider store={store}>
        <Loading />
      </Provider>
    )
    expect(getById(container, 'loading')).toBeInTheDocument()
  })

})