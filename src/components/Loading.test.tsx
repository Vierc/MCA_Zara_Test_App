import "@testing-library/jest-dom/extend-expect";
import { queryByAttribute, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Loading from "./Loading";
import { setLoading } from "../store/features/loadingSlice";
import { act } from "react-dom/test-utils";

describe("Loading Component", () => {
  
  test("show/hide loading wheel", () => {
    act(() => {
      store.dispatch(setLoading(true))
    })
    const getById = queryByAttribute.bind(null, 'id');
    const { container } = render(
      <Provider store={store}>
        <Loading />
      </Provider>
    )
    expect(getById(container, 'loading')).toBeInTheDocument()
    act(() => {
      store.dispatch(setLoading(false))
    })
    const element = getById(container, 'loading');
    expect(element).toBe(null)
  })

})