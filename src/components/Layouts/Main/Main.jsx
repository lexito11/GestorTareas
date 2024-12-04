import React from 'react';
import './Main.css';
import ItemTask from '../../ItemTask/ItemTask';

const Main = ({ tasks, toggleTaskCompletion, setFilter }) => {
  return (
    <div className="main-container">
      <h2>Lista de tareas</h2>
      <div className="filters">
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <ItemTask key={index} task={task} toggleCompletion={() => toggleTaskCompletion(index)} />
        ))}
      </div>
    </div>
  );
};

export default Main;
