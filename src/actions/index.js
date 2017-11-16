import { createAxiosInstance } from '../utils/networking';
import { SAMPLE_ACTION } from './types';

const http = createAxiosInstance();

export const sample = () => async dispatch => {
  const res = await http.get('http://rallycoding.herokuapp.com/api/music_albums');
  dispatch({
    type: SAMPLE_ACTION,
    payload: res
  });
}
