import { useCallback, useEffect, useRef } from 'react';

export function useIsMounted() {
  const isMounted = useRef<Boolean>(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

