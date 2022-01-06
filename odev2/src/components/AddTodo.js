import React, { useState, useEffect } from "react";

const AddTodo = (props) => {
  const { setTodos, todos } = props;
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput("");
  }, [todos]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    e.preventDefault();
    setTodos([
      { text: input, isComplete: false, id: Math.floor(Math.random() * 10000) },
      ...todos,
    ]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={onChange}
          name="text"
          type="text"
        />
      </form>
    </div>
  );
};

export default AddTodo;
