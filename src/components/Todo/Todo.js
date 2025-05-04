import { useEffect } from "react";
import React from "react";
import { connect } from "react-redux";
import { getTodoThunk } from "../../store/slices/todoSlices";

const Todo = ({ todos, status, error, getTodos }) => {
  useEffect(() => {
    getTodos();
  }, []);

  const mapTodos = (todo) => {
    return <li key={todo.id}>{todo.titel}</li>;
  };

  return (
    <>
      {status}
      {error}
      111
      {status && <div>{status}</div>}
      {error && <div>{error}</div>}
      {!error && status === "success" && <ul>{todos.map(mapTodos)}</ul>}
    </>
  );
};

const mapStateToProps = (state) => {
  const { todos, status, error } = state.todo;
  console.log(todos, status, error, state);
  return {
    todos,
    status,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => {
    return dispatch(getTodoThunk());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
