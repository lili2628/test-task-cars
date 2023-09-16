import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getCars = createAsyncThunk(
  'notices/getNotices',
  async ({ categoryName, page = 1, query = '' }, thunkAPI) => {
    try {
      let path;
      if (query) {
        path = `api/notices?category=${categoryName}&page=${page}&searchQuery=${query}`;
      } else {
        path = `api/notices?category=${categoryName}&page=${page}`;
      }
      const res = await axios.get(path);
      return res.data;
    } catch (error) {
      toast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
