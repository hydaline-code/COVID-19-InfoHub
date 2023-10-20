import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  state: null,
  details: null,
};
const transformData = (rawData) => rawData;

const HomeSlice = createSlice({
  name: 'Home',
  initialState,
  reducers: {
    fetchDataRequest: (state) => ({
      ...state,
      state: 'Pending',
    }),
    fetchDataSuccess: (state, { payload }) => ({
      ...state,
      state: 'Success',
      data: transformData(payload),
    }),
    fetchDataError: (state, { payload }) => ({
      ...state,
      state: `Error: ${payload}`,
    }),
    setDetails: (state, { payload }) => ({
      ...state,
      details: payload,
    }),
  },
});

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  setDetails,
} = HomeSlice.actions;

const api = 'https://coronavirus.m.pipedream.net/';

const getData = () => async (dispatch) => {
  dispatch(fetchDataRequest());

  try {
    const response = await fetch(api);
    if (response.ok) {
      const data = await response.json();

      dispatch(fetchDataSuccess(data));
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    dispatch(fetchDataError(error.message));
  }
};

export { getData };

export default HomeSlice.reducer;
