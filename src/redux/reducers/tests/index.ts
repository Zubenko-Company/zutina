import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Test = {
  question: string;
  answer: string;
};

interface TestsState {
  tests: Array<Test>;
}

const initialState: TestsState = {
  tests: [],
};

export const testsSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    uploadTest: (state, action: PayloadAction<Test>) => ({
      ...state,
      tests: [...state.tests, action.payload],
    }),
  },
});

export const { uploadTest } = testsSlice.actions;

export const tests = testsSlice.reducer;
