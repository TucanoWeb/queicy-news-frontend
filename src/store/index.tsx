import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import sessionSlice from "./sessionSlice";

const rootReducer = combineReducers({
  userConfig: userSlice,
  sessionConfig: sessionSlice
});

export default configureStore({
  reducer: rootReducer
});

export type IRootState = ReturnType<typeof rootReducer>;
