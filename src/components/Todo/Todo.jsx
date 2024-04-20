import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = (e) => onDelete(todo);

  return (
    <li key={id}>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrash />
      </button>
    </li>
  );
}
