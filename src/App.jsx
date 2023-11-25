// src/App.jsx
import React from 'react';
import { ChakraProvider, CSSReset, extendTheme, theme, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';

// Configuración del tema
const customTheme = extendTheme({
  config: {
    initialColorMode: 'light', // Puedes cambiar a 'dark' para que el modo oscuro sea el predeterminado
    useSystemColorMode: false,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript />
      <CSSReset />
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tareas" component={Tareas} />
            <Route path="/sobre-nosotros" component={SobreNosotros} />
          </Switch>
        </div>
      </Router>
    </ChakraProvider>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la Aplicación de Tareas</h1>
    </div>
  );
};

export default App;


