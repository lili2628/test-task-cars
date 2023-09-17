import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://650751713a38daf4803f6937.mockapi.io';


export const getCars = createAsyncThunk(
  'adverts/getCars',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/adverts');
      console.log('res', res);
      return res.data;
    } catch (error) {
      toast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
