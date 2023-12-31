// src/components/Header.jsx
import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <h1>My Task List</h1>
      <Button onClick={toggleColorMode}>
        {colorMode === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
      </Button>
    </header>
  );
};

export default Header;



