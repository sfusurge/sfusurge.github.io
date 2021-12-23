import { TScrollReducer, UNLOCK, LOCK } from './types'

const { max } = Math

const reducer: TScrollReducer = (state, action) => {
  switch (action.type) {
    case LOCK: {
      return { locks: state.locks + 1, locked: true }
    }
    case UNLOCK: {
      const locks = max(state.locks - 1, 0)
      return { locks, locked: locks === 1 }
    }
  }
}

export default reducer
