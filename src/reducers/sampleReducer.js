import { SAMPLE_ACTION } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SAMPLE_ACTION: 
      return action.payload || false;
    default:
      return state;
  }
}