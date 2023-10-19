
// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   data: [],
//   state: null,
//   details: null,
// };

// const HomeSlice = createSlice({
//   name: 'Home',
//   initialState,
//   reducers: {
//     fetchDataRequest: (state) => ({
//       ...state,
//       state: 'Pending',
//     }),
//     fetchDataSuccess: (state, { payload }) => ({
//       ...state,
//       state: 'Success',
//       data: payload,
//     }),
//     fetchDataError: (state, { payload }) => ({
//       ...state,
//       state: `Error: ${payload}`,
//     }),
//     setDetails: (state, { payload }) => ({
//       ...state,
//       details: payload,
//     }),
//   },
// });

// export const {
//   fetchDataRequest,
//   fetchDataSuccess,
//   fetchDataError,
//   setDetails,
// } = HomeSlice.actions;

// // API endpoint
// const api = 'https://coronavirus.m.pipedream.net/';
// const getData = () => async (dispatch) => {
//   console.log('Fetching data...'); 
//   dispatch(fetchDataRequest());
//   try {
//     const response = await axios.get(api);
//     console.log('Data fetched successfully:', response.data); 
//     dispatch(fetchDataSuccess(response.data));
//   } catch (error) {
//     console.error('Error while fetching data:', error); 
//     dispatch(fetchDataError(error));
//   }
// };

// export { getData };

// export default HomeSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  state: null,
  details: null,
};

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
      data: transformData(payload), // Transform the data into an array
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

const transformData = (rawData) => {
  // Modify this function to transform rawData into an array of objects
  // For example, if rawData is an array, you might not need to modify it
  return rawData;
};

export const {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  setDetails,
} = HomeSlice.actions;

// API endpoint
// const api = 'https://coronavirus.m.pipedream.net/';
// const getData = () => async (dispatch) => {
//   console.log('Fetching data...'); 
//   dispatch(fetchDataRequest());
//   try {
//     const response = await axios.get(api);
//     console.log('Data fetched successfully:', response.data); 
//     dispatch(fetchDataSuccess(response.data));
//   } catch (error) {
//     console.error('Error while fetching data:', error); 
//     dispatch(fetchDataError(error));
//   }
// };

// export { getData };

// Import other necessary modules and your Redux actions

// API endpoint
const api = 'https://coronavirus.m.pipedream.net/';

const getData = () => async (dispatch) => {
  console.log('Fetching data...'); 
  dispatch(fetchDataRequest());

  try {
    const response = await fetch(api); // Use fetch to make the network request
    if (response.ok) {
      const data = await response.json(); // Parse the response as JSON
      console.log('Data fetched successfully:', data); 
      dispatch(fetchDataSuccess(data));
    } else {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error while fetching data:', error); 
    dispatch(fetchDataError(error.message));
  }
};

export { getData };

// Export your Redux actions and reducer


export default HomeSlice.reducer;

