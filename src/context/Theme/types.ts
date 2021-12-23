export const TOGGLE = 'TOGGLE'
export const SET = 'SET'
export const LIGHT_THEME = 'light'
export const DARK_THEME = 'dark'
export type TThemes = typeof LIGHT_THEME | typeof DARK_THEME

interface IThemeToggleAction {
  type: typeof TOGGLE
}

interface IThemeSetAction {
  type: typeof SET
  newTheme: TThemes
}

export type TThemeReducerActions = IThemeToggleAction | IThemeSetAction

export interface ITheme {
  theme: TThemes
}

export type TThemeReducer = (
  state: ITheme,
  action: TThemeReducerActions
) => ITheme

export interface TThemeContext {
  theme: ITheme
  dispatch: React.Dispatch<TThemeReducerActions>
}
