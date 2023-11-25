// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';

const App = () => {
  return (
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
