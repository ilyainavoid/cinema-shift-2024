import authorizationReducer from '@redux/authorization/authorizationSlice.ts';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    authorization: authorizationReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
