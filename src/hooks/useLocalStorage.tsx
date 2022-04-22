/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useCallback, Dispatch, SetStateAction } from 'react';

import { parseJSON } from 'helper';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const readValue = useCallback((): T => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue = useCallback(
    (value) => {
      if (typeof window == 'undefined') {
        console.warn(`Tried setting localStorage key “${key}” even though environment is not a client`);
      }

      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        window.localStorage.setItem(key, JSON.stringify(valueToStore));

        setStoredValue(valueToStore);

        window.dispatchEvent(new Event('local-storage'));
      } catch (error) {
        console.warn(`Error setting localStorage key “${key}”:`, error);
      }
    },
    [key, storedValue],
  );

  useEffect(() => {
    setStoredValue(readValue());
  }, []);

  return [storedValue, setValue];
}
