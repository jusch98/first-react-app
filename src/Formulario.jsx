// src/Formulario.jsx
import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: ''
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Usuario registrado exitosamente');
    setFormData({ nombre: '', correo: '', contrasena: '' });
    setIsOpen(false); // Cierra el modal después de enviar
  };

  const toggleModal = () => {
    setIsOpen(!isOpen); // Abre o cierra el modal
  };

  return (
    <div className="formulario-container">
      <button className="registro-button" onClick={toggleModal}>
        Registrarse
      </button>

      {isOpen && (
        <div className="formulario-modal">
          <div className="formulario-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <h2>Regístrate</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
              />
              <label htmlFor="contrasena">Contraseña:</label>
              <input
                type="password"
                id="contrasena"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleChange}
                placeholder="Tu contraseña"
                required
              />
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Formulario;
