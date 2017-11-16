import axios from 'axios';
import { SAMPLE_ACTION } from './types';

export const sample = () => async dispatch => {
  const res = await axios.get('/');
  dispatch({
    type: SAMPLE_ACTION,
    payload: res
  });
}
