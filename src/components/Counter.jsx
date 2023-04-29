import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState(0);

  const byAmount = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(input)));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form onSubmit={(e) => byAmount(e)}>
        <input type="number" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Counter;
