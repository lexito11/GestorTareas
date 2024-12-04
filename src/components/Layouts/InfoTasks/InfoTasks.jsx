import React from 'react';
import './InfoTasks.css';

const InfoTasks = ({ tasks }) => {
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  return (
    <div className="info-tasks">
      <h2>Información de tareas</h2>
      <p>Tareas pendientes: {pendingTasks}</p>
      <p>Tareas terminadas: {completedTasks}</p>
    </div>
  );
};

export default InfoTasks;
