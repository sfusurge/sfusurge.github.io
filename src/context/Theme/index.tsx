import { createContext, useReducer, ReactNode } from 'react'
import { TThemeReducer, ITheme, TThemeContext } from './types'
import reducer from './reducer'
import { noop } from 'lodash'

const defaultTheme: ITheme = { theme: 'light' }

export const ThemeContext = createContext<TThemeContext>({
  theme: defaultTheme,
  dispatch: noop
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, dispatch] = useReducer<TThemeReducer>(reducer, defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
