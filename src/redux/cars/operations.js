import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://650751713a38daf4803f6937.mockapi.io';


export const getCars = createAsyncThunk(
  'adverts/getCars',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/adverts');
      return res.data;
    } catch (error) {
      toast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCarsByPage = createAsyncThunk(
  'adverts/getCarsByPage',
  async ({ page }, thunkAPI) => {
    try {
      const path = `/adverts?completed=false&page=${page}&limit=8`;

      const res = await axios.get(path);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
