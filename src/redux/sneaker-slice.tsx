import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { item } from "../App";

type sneaker = {
  items: item[];
  searchValue: string;
};

const initialState: sneaker = {
  items: [],
  searchValue: "",
};

const getItems = async (searchValue: string) => {
  const data = await axios.get(
    `https://62c681e474e1381c0a60cddb.mockapi.io/item?search=${searchValue}`,
  );
  return data.data;
};

export const fetchSneakers = createAsyncThunk(
  "fetchSneakers/fetchSneakersStatus",
  (searchValue: string) => {
    return getItems(searchValue);
  },
);

export const SneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.fulfilled, (state, action: PayloadAction<item[]>) => {
      state.items = action.payload;
    });
  },
});

export const { setSearchValue } = SneakersSlice.actions;

export default SneakersSlice.reducer;
