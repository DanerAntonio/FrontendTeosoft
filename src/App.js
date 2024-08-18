import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>TeoSoft PetStore Frontend</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Bienvenido a TeoSoft PetStore</h2>;
}

function Compras() {
  return <h2>Página de Compras</h2>;
}

function Clientes() {
  return <h2>Gestión de Clientes</h2>;
}

export default App;
