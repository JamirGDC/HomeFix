import React, { Component } from "react";
import React, { useState } from 'react';
import "../styles/questions.css";


const Questions = () => {
  const preguntas = [
    {
      id: 1,
      pregunta: '¿Cómo calificarías tu experiencia general con la aplicación?',
      opciones: ['Excelente', 'Bueno', 'Regular', 'Malo'],
    },
    {
      id: 2,
      pregunta: '¿Qué funcionalidades te parecen más útiles?',
      opciones: ['Funcionalidad A', 'Funcionalidad B', 'Funcionalidad C', 'Otra'],
    },
    // Agrega más preguntas según sea necesario
  ];

  const [respuestas, setRespuestas] = useState({});

  const handleRespuesta = (preguntaId, respuesta) => {
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [preguntaId]: respuesta,
    }));
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Encuesta para Profesionales del Hogar</h1>
      <div className="grid grid-cols-1 gap-4">
        {preguntas.map((pregunta) => (
          <div key={pregunta.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{pregunta.pregunta}</p>
            <div className="mt-2">
              {pregunta.opciones.map((opcion) => (
                <label key={opcion} className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`pregunta${pregunta.id}`}
                    value={opcion}
                    checked={respuestas[pregunta.id] === opcion}
                    onChange={() => handleRespuesta(pregunta.id, opcion)}
                    className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-300"
                  />
                  <span className="ml-2">{opcion}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Enviar respuestas
      </button>
    </div>
  );
};



export default Questions;