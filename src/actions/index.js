// import { createAxiosInstance } from '../utils/networking';
import axios from 'axios'
import { SAMPLE_ACTION } from './types'

// const http = createAxiosInstance()

export const sample = () => async dispatch => {
  const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums')
  dispatch({
    type: SAMPLE_ACTION,
    payload: res
  })
}
