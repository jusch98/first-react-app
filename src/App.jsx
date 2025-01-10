import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import LanguageSelector from './Languages';
import Formulario from './Formulario';
import LangProvider from './LangProvider'; // Proveedor de contexto para idioma

function App() {
  return (
    <LangProvider>
      <div className="App">
        {/* Selector de idiomas */}
        <LanguageSelector />
        
        {/* Formulario */}
        <Formulario />
      
        {/* Encabezado */}
        <Header />
        
        {/* Rutas principales de la aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<Article />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </div>
    </LangProvider>
  );
}

export default App;
