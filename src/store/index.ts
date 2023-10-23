import { combineReducers, configureStore } from "@reduxjs/toolkit";
import timerSlice from "../reducers";

const rootReducer = combineReducers({
  timer: timerSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>

export default store