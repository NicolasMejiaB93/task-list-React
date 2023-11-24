// src/components/Task.jsx
import React from 'react';

const Task = ({ task }) => {
  const { title, description, completed } = task;

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {completed ? <span>✓</span> : <span>○</span>}
    </div>
  );
};

export default Task;
