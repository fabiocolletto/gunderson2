import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
// Importe outros componentes e páginas aqui, se necessário

function Routes() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* Adicione outras rotas aqui */}
    </Router>
  );
}

export default Routes;

