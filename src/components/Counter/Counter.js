import React from "react";
import { connect } from "react-redux";
import { decrement, increment, reset } from "../../store/slices/counterSlices";

function Counter({ counter, increment, decrement, reset }) {
  return (
    <>
      <button onClick={increment}> Increment</button>
      <span>Counter: {counter} </span>
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
  decrement: () => {
    return dispatch(decrement());
  },
  reset: () => {
    return dispatch(reset());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
