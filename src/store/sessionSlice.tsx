import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valid: false,
    code: 0,
    message: ""
};

const sessionSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        session(state, { payload }) {
            state.valid = payload.valid;
            state.code = payload.code;
            state.message = payload.message;
        }
    }
});

export const { session } = sessionSlice.actions;

export default sessionSlice.reducer;
