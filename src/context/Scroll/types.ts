export const LOCK = 'LOCK'
export const UNLOCK = 'UNLOCK'

interface IScrollLockAction {
  type: typeof LOCK | typeof UNLOCK
}

export type TScrollReducerActions = IScrollLockAction

export interface IScroll {
  locks: number
  locked: boolean
}

export type TScrollReducer = (
  state: IScroll,
  action: TScrollReducerActions
) => IScroll

export interface TScrollContext {
  scroll: IScroll
  dispatch: React.Dispatch<TScrollReducerActions>
}
