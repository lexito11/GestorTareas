import React, { useState } from 'react';
import './App.css';
import NewTask from './components/NewTask/NewTask';
import InfoTasks from './components/Layouts/InfoTasks/InfoTasks';
import Main from './components/Layouts/Main/Main';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title, description) => {
    setTasks([...tasks, { title, description, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true;
    return filter === "completed" ? task.completed : !task.completed;
  });

  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <NewTask addTask={addTask} />
      <InfoTasks tasks={tasks} />
      <Main tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} setFilter={setFilter} />
    </div>
  );
}

export default App;
