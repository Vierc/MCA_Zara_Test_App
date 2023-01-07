import { useState } from "react";

const EXPIRATION_TIME_IN_SECONDS =  86400;

export function useLocalStorage (key: string, initialValue: any) {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      const itemParsed = item ? JSON.parse(item) : null
      const timestamp = new Date().getTime()
      return itemParsed && itemParsed.expires_in > timestamp ? itemParsed.value : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      const expires_in = new Date().getTime() + EXPIRATION_TIME_IN_SECONDS * 1000
      window.localStorage.setItem(key, JSON.stringify({ value, expires_in }))
    } catch (error) {
      console.error(error)
    }
  }
  return [storedValue, setValue]
}