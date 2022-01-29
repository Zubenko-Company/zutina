import { tests } from '@Reducers/tests';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tests,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
