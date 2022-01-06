import React from "react";

const TodoList = (props) => {
  const { todos, completeTodo, removeTodo, removeCompletedTodo } = props;

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isComplete ? "completed" : ""}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                defaultChecked={todo.isComplete}
                onClick={() => completeTodo(todo.id)}
              />
              <label>{todo.text}</label>
              <button
                className="destroy"
                onClick={() => removeTodo(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
      <footer className="footer">
        <span className="todo-count">
          <strong>{todos.filter((todo) => !todo.isComplete).length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a className="selected">All</a>
          </li>
          <li>
            <a>Active</a>
          </li>
          <li>
            <a>Completed</a>
          </li>
        </ul>
        <button
          onClick={removeCompletedTodo}
          className="clear-completed "
          style={{
            display:
              todos.filter((todo) => todo.isComplete).length === 0
                ? "none"
                : "block",
          }}
        >
          Clear Completed
        </button>
      </footer>
    </div>
  );
};

export default TodoList;
