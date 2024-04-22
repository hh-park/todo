import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };

  const handleDelete = (e) => onDelete(todo);

  return (
    <li className={styles.todo} key={id}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrash />
        </button>
      </span>
    </li>
  );
}
