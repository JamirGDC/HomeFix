// Importa las dependencias necesarias
import React from "react";
import { createRoot } from 'react-dom/client'; // Cambia la importación aquí
import { ThemeProvider } from "@material-tailwind/react";

// Importa tus componentes
import Layout from "./layout";
import "../styles/index.css";
import "./index.css";

// Utiliza createRoot para renderizar tu aplicación
const root = createRoot(document.querySelector("#app"));


// Llama a root.render y pasa tus componentes envueltos en ThemeProvider
root.render(
  <ThemeProvider>
    <Layout />
  </ThemeProvider>
);

