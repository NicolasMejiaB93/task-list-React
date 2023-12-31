// src/components/Task.jsx
import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const { id, title, description, completed } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ title, description });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(id, editedTask);
    setIsEditing(false);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <>
          <span>{completed ? '✓' : '○'}</span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Task;

