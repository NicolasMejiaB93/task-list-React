// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
  // Ejemplo de tareas
  const initialTasks = [
    { title: 'Hacer la compra', description: 'Comprar leche, pan y frutas', completed: false },
    { title: 'Estudiar React', description: 'Repasar conceptos básicos de React', completed: false },
    { title: 'Hacer ejercicio', description: 'Ir al gimnasio o dar un paseo', completed: true },
    { title: 'Llamada con mamá', description: 'Hablar con mamá sobre el fin de semana', completed: false },
    { title: 'Preparar la cena', description: 'Cocinar algo saludable para la cena', completed: false },
    { title: 'Leer un libro', description: 'Dedicar 30 minutos a la lectura antes de dormir', completed: true },
    { title: 'Enviar correo electrónico', description: 'Responde a los correos pendientes', completed: false },
    { title: 'Practicar guitarra', description: 'Practicar acordes y canciones nuevas', completed: false },
    // Puedes agregar más tareas según sea necesario
  ];

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="app">
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;

