import React from "react";
import { connect } from "react-redux";
import {
  increment,
  incrementAmount,
  decrement,
  reset,
} from "../../store/slices/counterSlices";

function Counter({ counter, increment, incrementAmount, decrement, reset }) {
  return (
    <>
      <button onClick={increment}> Increment</button>
      <span>
        Counter: 
        <input type="number" value={counter} onChange={incrementAmount} />
      </span>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
const mapStateToProps = (state) => {
  return state.counter;
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    return dispatch(increment());
  },
  incrementAmount: ({target:{value}}) => {
    console.log(value)
    return dispatch(incrementAmount(value));
  },
  decrement: () => {
    return dispatch(decrement());
  },
  reset: () => {
    return dispatch(reset());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
