import { SAMPLE_ACTION } from '../actions/types'

// 3 different states can be returned
// null - pending or no request
// false - request returned empty
// state - action.payload

export default function (state = null, action) {
  switch (action.type) {
    case SAMPLE_ACTION:
      return action.payload || false
    default:
      return state
  }
}
