// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  const provinces = ["Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", /* ... y otras provincias de España */];
  const professions = ["Fontanero", "Electricista", "Albañil", "Carpintero", "Arquitecto", "Diseñador de interiores", "Plomero", "Jardinero", "Pintor", "Ingeniero civil", "Mecánico", "Diseñador de paisajes", "Técnico en climatización", "Instalador de sistemas de seguridad", "Instalador de sistemas eléctricos", /* ... y otras profesiones */];

  const handleApplyFilter = () => {
    // Implementa la lógica para aplicar el filtro aquí
    console.log("Filtro aplicado");
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="mt-4 flex space-x-4">
          {/* Filtro de Provincias */}
          <select className="w-1/2 p-2 border rounded-md">
            <option value="">Todas las provincias</option>
            {provinces.map((province) => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>

          {/* Filtro de Profesiones */}
          <select className="w-1/2 p-2 border rounded-md">
            <option value="">Todas las profesiones</option>
            {professions.map((profession) => (
              <option key={profession} value={profession}>{profession}</option>
            ))}
          </select>
        </div>

        {/* Botón Aplicar */}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleApplyFilter}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
