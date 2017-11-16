import axios from 'axios';
import { SAMPLE_ACTION } from './types';

export const sample = () => {
  return {
    type: SAMPLE_ACTION,
    payload: ''
  }
}