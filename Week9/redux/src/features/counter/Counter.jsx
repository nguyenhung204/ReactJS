import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="feature-section">
      <h2>1. Counter App</h2>
      <div className="counter">
        <h3>Count: {count}</h3>
        <div className="counter-buttons">
          <button onClick={() => dispatch(increment())}>Tăng</button>
          <button onClick={() => dispatch(decrement())}>Giảm</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;