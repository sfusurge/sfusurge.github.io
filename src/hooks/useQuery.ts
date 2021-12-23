import { useEffect, useRef, useState } from 'react'

const useQuery = (query: string) => {
  const mediaQuery = useRef(matchMedia(query))
  const [matches, setMatches] = useState(mediaQuery.current.matches)

  useEffect(() => {
    const queryListener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.current = matchMedia(query)
    mediaQuery.current.addEventListener('change', queryListener)

    return () => mediaQuery.current.removeEventListener('change', queryListener)
  }, [query])

  return matches
}

export default useQuery
