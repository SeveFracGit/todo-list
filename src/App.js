import React, { useState } from 'react';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const ongoingTasks = totalTasks - completedTasks;

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-xl mx-auto bg-white p-5 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Liste des taches a Effectuer </h1>
        
        <div className="mb-4">
          <p>Total des tâches: {totalTasks}</p>
          <p>Tâches terminées: {completedTasks}</p>
          <p>Tâches en cours: {ongoingTasks}</p>
        </div>
        
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-md"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >
            AJouter
          </button>
        </div>
        
        <ul>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onToggleComplete={() => handleToggleComplete(index)}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
