import React from 'react';
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/stroage" element={<Stroage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/build/:bID" element={<Build />} />
        <Route path="/analytics/:aID" element={<Analytics />} />
      </Routes>
    </RootLayout>
  );
};

export default App;