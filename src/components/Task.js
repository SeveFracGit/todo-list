import React from 'react';

const Task = ({ task, onToggleComplete, onDelete }) => { 
  return (
    <li className={`flex justify-between items-center p-2 border-b ${task.completed ? 'line-through text-gray-500' : ''}`}>
      <span onClick={onToggleComplete} className="cursor-pointer flex-1">
        {task.text}
      </span>
      <button onClick={onDelete} className="ml-2 text-red-500">
        Delete
      </button>
    </li>
  );
};

export default Task;
