import { configureStore } from '@reduxjs/toolkit';
import { tests } from './reducers/tests/tests';

export const store = configureStore({
  reducer: {
    tests,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
