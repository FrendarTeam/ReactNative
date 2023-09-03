import {createSlice} from '@reduxjs/toolkit';

export type color = '#FFF8BD' | '#EEEBFC' | '#DBFAF6' | '#FBE8E5';

interface SettingState {
  mainColor: color;
  isAlarm: boolean;
}

const initialState : SettingState = {
  mainColor: '#FFF8BD',
  isAlarm: true,
};
const settingSlice = createSlice({
  name: 'setting',
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
