import { configureStore } from "@reduxjs/toolkit";
import sneakers from "./sneaker-slice";
// ...

export const store = configureStore({
  reducer: {
    sneakers,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
