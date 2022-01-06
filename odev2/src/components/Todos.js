import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "./styles.css";

const Todos = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React", isComplete: true, id: 1 },
    { text: "Learn JavaScript", isComplete: false, id: 2 },
  ]);

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const removeCompletedTodo = () => {
    const removeArr = todos.filter((todo) => !todo.isComplete);
    setTodos(removeArr);
  };
  return (
    <div>
      <h1>todos</h1>
      <AddTodo setTodos={setTodos} todos={todos} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        removeCompletedTodo={removeCompletedTodo}
      />
    </div>
  );
};

export default Todos;
