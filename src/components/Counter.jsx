import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

function Counter() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const updateChange = (e) => {
    console.log(e.target.value);
    let value = Number(e.target.value);
    dispatch(incrementByAmount(value));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form>
        <input type="number" onChange={updateChange} />
      </form>
    </div>
  );
}

export default Counter;
