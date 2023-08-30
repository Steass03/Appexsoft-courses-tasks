import React, { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [curentTodo, setcurentTodo] = useState([]);
  const addTodo = () => {
    if (curentTodo.trim() !== "") {
      setTodos([...todos, curentTodo]);
      setcurentTodo("");
    }
  };

  const removeTodo = (index) => {
    const newTodo = todos.filter((_, i) => i !== index);
    setTodos(newTodo);
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My fisrt Todo App</h1>
      <div className="Flex mb-2">
        <input
          className="Flex-grow border rounded-l py-2 px-3"
          type="text"
          value={curentTodo}
          onChange={(e) => setcurentTodo(e.target.value)}
        />

        <button
          className="bg-green-500 hover:gb-green-600 text-white py-2 px-4 rounded-r"
          onClick={addTodo}
        >
          Додати завдання{" "}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className="Flex item-center justify-between border-b py-2"
            >
              {todo}
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                onClick={() => removeTodo(index)}
              >
                {" "}
                Видалити{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
