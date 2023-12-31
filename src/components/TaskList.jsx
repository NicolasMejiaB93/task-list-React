// src/components/TaskList.jsx
import React, { useState, useEffect } from 'react';
import Task from './Task';
import useCustomTasks from './hooks/useCustomTasks';
import { useColorMode } from '@chakra-ui/react';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask } = useCustomTasks();
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const { colorMode } = useColorMode();

  // Mínimo 8 tareas inventadas
  const initialTasks = [
    { id: 1, title: 'Hacer la compra', description: 'Comprar leche, pan y frutas', completed: false },
    { id: 2, title: 'Estudiar React', description: 'Repasar conceptos básicos de React', completed: false },
    { id: 3, title: 'Hacer ejercicio', description: 'Ir al gimnasio o dar un paseo', completed: true },
    { id: 4, title: 'Llamada con mamá', description: 'Hablar con mamá sobre el fin de semana', completed: false },
    { id: 5, title: 'Preparar la cena', description: 'Cocinar algo saludable para la cena', completed: false },
    { id: 6, title: 'Leer un libro', description: 'Dedicar 30 minutos a la lectura antes de dormir', completed: true },
    { id: 7, title: 'Enviar correo electrónico', description: 'Responde a los correos pendientes', completed: false },
    { id: 8, title: 'Practicar guitarra', description: 'Practicar acordes y canciones nuevas', completed: false },
  ];

  useEffect(() => {
    tasks(initialTasks);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if (newTaskName.length < 3) {
      alert("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }

    // Agregar nueva tarea
    addTask({
      id: tasks.length + 1,
      title: newTaskName,
      description: newTaskDescription,
      completed: false,
    });

    // Limpiar campos del formulario
    setNewTaskName('');
    setNewTaskDescription('');
  };

  return (
    <div className={`task-list ${colorMode === 'dark' ? 'dark-mode' : ''}`}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={deleteTask}
          onEdit={editTask}
        />
      ))}

      {/* Formulario para agregar tareas */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="taskName">Nombre de la tarea:</label>
        <input
          type="text"
          id="taskName"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <label htmlFor="taskDescription">Descripción:</label>
        <textarea
          id="taskDescription"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    </div>
  );
};

export default TaskList;


