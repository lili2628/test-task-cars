import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://65060de1ef808d3c66f0c7f7.mockapi.io/';


export const getCars = createAsyncThunk(
  'adverts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`api/adverts/adverts`);
      return res.data;
    } catch (error) {
      toast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
