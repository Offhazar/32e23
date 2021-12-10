import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch(increace());
    dispatch(counterActions.decrement());
  };

  const increHandler = () => {
    // dispatch({ type: 'INCRESE', amount: 5 });
    dispatch(counterActions.increce(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'TOGGLE' });
    dispatch(counterActions.toogle());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>invrement</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={increHandler}>increse</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
