import { legacy_createStore } from "redux";

const counterReduser = (state = {counter: 0}, action) => {
  if(action.type === "increment") {
    return {
      counter: state.counter + 1,
    }
  }

  if(action.type === "increase") {
    return {
      counter: state.counter + action.number,
    }
  }

  if(action.type === "decrement") {
    return {
      counter: state.counter - 1,
    }
  }

  return state;
}

const store = legacy_createStore(counterReduser);

export default store;