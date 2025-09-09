import React from "react";
import "./../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const App = () => {
  let count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
};

export default App;
