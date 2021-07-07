import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "./../slices/userSlice";
import employeeReducer from "./../slices/employeeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    employee: employeeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
