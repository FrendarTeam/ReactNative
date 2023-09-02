import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  nickname: '테스트 닉네임',
  profileImage: 'https://i.ytimg.com/vi/94vXXYSKiHs/maxresdefault.jpg'
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfileImage(state, action) {
        state.profileImage = action.payload;
        }
  },
  extraReducers: builder => {},
});

export default userSlice;
