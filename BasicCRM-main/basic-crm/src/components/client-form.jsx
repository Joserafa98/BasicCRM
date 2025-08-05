import React, { useState } from 'react';

const NewClientForm = ({ onAddClient }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email) return;

    onAddClient(formData); 
    setFormData({ nombre: '', email: '', empresa: '' }); 
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow rounded-md">
      <h2 className="text-xl text-black font-semibold">Nuevo Cliente</h2>

      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full border text-black rounded px-3 py-2"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        className="w-full border text-black rounded px-3 py-2"
      />

      <input
        type="text"
        name="empresa"
        value={formData.empresa}
        onChange={handleChange}
        placeholder="Empresa"
        className="w-full border text-black rounded px-3 py-2"
      />

      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Agregar Cliente
      </button>
    </form>
  );
};

export default NewClientForm;
