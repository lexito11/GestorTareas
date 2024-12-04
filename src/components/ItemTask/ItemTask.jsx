import React from 'react';
import './ItemTask.css';

const ItemTask = ({ task, toggleCompletion }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={toggleCompletion}>
        {task.completed ? "Marcar como pendiente" : "Marcar como completada"}
      </button>
    </div>
  );
};

export default ItemTask;
