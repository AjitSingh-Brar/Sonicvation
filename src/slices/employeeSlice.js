import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: null,
  lastName: null,
  uID: null,
  dateOfEntry: null,
  profession: null,
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeDisplayDetails: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.uID = action.payload.uID;
      state.dateOfEntry = action.payload.dateOfEntry;
      state.profession = action.payload.profession;
    },
    setOutEmployeeDetails: (state) => {
      state.firstName = null;
      state.lastName = null;
      state.uID = null;
      state.dateOfEntry = null;
      state.profession = null;
    },
  },
});

export const { setEmployeeDisplayDetails, setOutEmployeeDetails } =
  employeeSlice.actions;
export const selectFirstName = (state) => state.employee.firstName;
export const selectLastName = (state) => state.employee.lastName;
export const selectUID = (state) => state.employee.uID;
export const selectDateOfEntry = (state) => state.employee.dateOfEntry;
export const selectProfession = (state) => state.employee.profession;

export default employeeSlice.reducer;
