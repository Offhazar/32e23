import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENR' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const increHandler = () => {
    dispatch({ type: 'INCRESE', amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' });
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
