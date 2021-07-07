import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload;
    },
    setSignOutState: (state) => {
      state.name = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;

export default userSlice.reducer;
