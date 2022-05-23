import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import applicationReducer from "../modules/application/application.reducer";

export const store = configureStore({
  reducer: {
    application: applicationReducer
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
