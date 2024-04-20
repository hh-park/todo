import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'grocery shopping', id: '1', status: 'active' },
    { text: 'learning', id: '2', status: 'active' },
  ]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <section>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <p>{todo.text}</p>
            </li>
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
}
