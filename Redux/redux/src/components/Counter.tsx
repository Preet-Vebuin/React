import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "../store/CounterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: any) => state.counter.count); // Get count from Redux store
  const dispatch = useDispatch(); // Get dispatch function
  const [number, setNumber] = useState<number>(0)
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input type="number" placeholder="input number" value={number} onChange={(e)=>setNumber(Number(e.target.value))}></input>
      <button onClick={() => dispatch(incrementByAmount(number))}>increment by {number}</button>
    
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
