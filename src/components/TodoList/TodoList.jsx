import React, { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'grocery shopping', id: '1', status: 'active' },
    { text: 'learning', id: '2', status: 'active' },
  ]);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
