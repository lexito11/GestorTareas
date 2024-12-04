import React, { useState } from 'react';
import './NewTask.css';
import Input from '../Pages/Input/Input';

const NewTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="new-task-container">
      <h2>Crear nueva tarea</h2>
      <form onSubmit={handleSubmit}>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título de la tarea" />
        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción de la tarea" />
        <button type="submit">Registrar tarea</button>
      </form>
    </div>
  );
};

export default NewTask;
