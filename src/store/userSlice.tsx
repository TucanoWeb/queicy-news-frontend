import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  role: 0
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData(state, { payload }) {
      state.id = payload.id ?? state.id;
      state.name = payload.name ?? state.name;
      state.email = payload.email ?? state.email;
      state.role = 1;
    },
    validationSession(state, { payload }) {
      state.role = payload; // true or false
    },
    signOut(state) {
      state.id = "";
      state.name = "";
      state.email = "";
      state.role = 0;
    }
  }
});

export const { userData, validationSession, signOut } = userSlice.actions;

export default userSlice.reducer;
