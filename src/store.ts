import { configureStore } from "@reduxjs/toolkit";
import timerSlice from "./reducers";

const store = configureStore({
  reducer: {
    timer: timerSlice.reducer,
  },
});

export default store