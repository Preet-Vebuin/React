import React, { useState, useCallback } from "react";

// TodoList Component
const TodoList: React.FC<{ todos: string[]; addTodo: () => void }> = React.memo(({ todos, addTodo }) => {
  console.log("TodoList re-rendered!");

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={addTodo}>Add Todo Again</button>
    </div>
  );
});

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  // Memoizing addTodo to prevent unnecessary function recreation
  const addTodo = useCallback(() => {
    if (input.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, input]);
      setInput(""); // Clear input after adding
    }
  }, [input]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Todo List</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>

      {/* Render TodoList inside the same file */}
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default TodoApp;
