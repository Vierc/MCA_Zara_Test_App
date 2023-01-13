import "@testing-library/jest-dom/extend-expect";
import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
  }
})

describe("useLocalStorage Hook", () => {

  test("render", () => {
    const { result } = renderHook(() => useLocalStorage("key", "value"))
    expect(result.current).toBeDefined()
    expect(result.current[0]).toEqual("value")
    expect(result.current[1]).toBeInstanceOf(Function)
  })

  test("should call localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("key", "value"))
    const setValue = result.current[1]
    act(() => {
      setValue("updatedValue")
    })
    expect(localStorage.getItem).toHaveBeenCalled()
    expect(localStorage.setItem).toHaveBeenCalled()
  })

})