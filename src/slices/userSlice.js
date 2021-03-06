import { createSlice } from "@reduxjs/toolkit";

// initial state of the userSlice
const initialState = {
  name: null,
  id: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.id = 0;
    },
  },
});

// exporting the redux state and reducers
export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectId = (state) => state.user.id;

export default userSlice.reducer;
