import axios from 'axios';
import { SAMPLE_ACTION } from './types';

export const sample = () => async dispatch => {
  const res = await axios.get('http://rallycoding.herokuapp.com/api/music_albums');
  dispatch({
    type: SAMPLE_ACTION,
    payload: res
  });
}
