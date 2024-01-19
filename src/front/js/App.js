import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import Analytics from "./pages/Analytics";
import Authentication from "./pages/Authentication";
import Build from "./pages/Build";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";
import Login from "./component/login";
import Signup from "./component/signup";

import React, { useContext, useEffect } from "react";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import injectContext, { Context } from "./store/appContext";
import { useNavigate } from "react-router-dom";

const RedirectToLogin = () => {
  const navigate = useNavigate();
  useEffect(() => {
      navigate("/login")
  }, [])
}

const RedirectToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
      navigate("/home")
  }, [])
}

const App = () => {

  // const basename = process.env.BASENAME || "";
  const { store, actions } = useContext(Context)

  if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

  return (
    <RootLayout>
      <Routes>
      { store.token ? <Route element={<Home />} path="/home" />: <Route element={<RedirectToLogin />} path="/home" /> }

        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/authentication" element={<Authentication />} />
        <Route path="/stroage" element={<Stroage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/build/:bID" element={<Build />} />
        { !store.token ? <Route element={<Login />} path="/login" /> : <Route element={<RedirectToHome />} path="/login" /> }

        <Route path="/analytics/:aID" element={<Analytics />} />
      </Routes>
    </RootLayout>
  );
};

export default injectContext(App);