// src/components/Tareas.js
import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';
import TaskList from './TaskList';

const Tareas = () => {
  return (
    <VStack align="center" spacing={4}>
      <Heading>Listado de Tareas</Heading>
      <TaskList />
    </VStack>
  );
};

export default Tareas;
