import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchFunction = useDispatch();
  const counter = useSelector((state) =>  state.counter);
  const isConterInvisible = useSelector((state) =>  state.isConterInvisible);

  const incrementHandler = () => {
    dispatchFunction(counterActions.increnemt())
  };

  const decrementHandler = () => {
    dispatchFunction(counterActions.decrement())
  };

  const increaseHandler = () => {
    dispatchFunction(counterActions.increase(10))
  };

  const toggleCounterHandler = () => {
    dispatchFunction(counterActions.setCounterVisibility())
  };

  return (
    <main className={classes.counter}>
      <h1>Счётчик</h1>
      {!isConterInvisible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+10</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
    </main>
  );
};

export default Counter;
