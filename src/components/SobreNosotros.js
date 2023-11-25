// src/components/SobreNosotros.js
import React from 'react';
import { VStack, Heading, Text, Box, Image } from '@chakra-ui/react';

const SobreNosotros = () => {
  return (
    <VStack align="center" spacing={6}>
      <Heading>Nosotros</Heading>
      <Text fontSize="lg" textAlign="center">
        ¡Bienvenido a My React Task List, donde convertimos las tareas diarias en algo extraordinario!
        Somos un equipo apasionado que cree en la simplicidad y la eficiencia para mejorar tu vida diaria.
      </Text>
      <Box maxW="500px" textAlign="center">
        <Image src="https://via.placeholder.com/400" alt="Equipo" />
      </Box>
      <Text fontSize="md" textAlign="center">
        Nuestro equipo está formado por mentes creativas y dedicadas que trabajan arduamente para brindarte
        la mejor experiencia en la gestión de tareas.
      </Text>
      <Text fontSize="md" textAlign="center">
        En My React Task List, no solo creamos una aplicación, sino un compañero confiable para ayudarte
        a organizar tu día y alcanzar tus metas.
      </Text>
    </VStack>
  );
};

export default SobreNosotros;
