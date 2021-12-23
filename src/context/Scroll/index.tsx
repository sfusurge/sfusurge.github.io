import { createContext, useReducer, ReactNode } from 'react'
import { IScroll, TScrollContext, TScrollReducer } from './types'
import reducer from './reducer'
import { noop } from 'lodash'

const defaultScroll: IScroll = { locks: 0, locked: false }

export const ScrollContext = createContext<TScrollContext>({
  scroll: defaultScroll,
  dispatch: noop
})

const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [scroll, dispatch] = useReducer<TScrollReducer>(reducer, defaultScroll)

  return (
    <ScrollContext.Provider value={{ scroll, dispatch }}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
