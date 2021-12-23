import { TThemeReducer, TOGGLE, SET } from './types'

const reducer: TThemeReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE: {
      return { theme: state.theme === 'light' ? 'dark' : 'light' }
    }
    case SET: {
      return { theme: action.newTheme }
    }
  }
}

export default reducer
