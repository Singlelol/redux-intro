import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  isConterInvisible: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increnemt(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    setCounterVisibility(state) {
      state.isConterInvisible = !state.isConterInvisible;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;