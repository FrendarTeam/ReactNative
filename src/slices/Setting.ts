import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  mainColor: 'red',
  isAlarm: true,
};
const settingSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMainColor(state, action) {
        state.mainColor = action.payload.mainColor;
        },
    setIsAlarm(state, action) {
        state.isAlarm = action.payload.isAlarm;
        }

  },
  extraReducers: builder => {},
});

export default settingSlice;
