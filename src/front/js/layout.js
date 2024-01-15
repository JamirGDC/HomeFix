import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import "./styles/layout.css";

import injectContext from "./store/appContext";

import Footer from "./component/footer";
import Sign from "./component/sign";
import Login from "./component/login";
import About from "./component/about";
import Questions from "./component/questions";
import Manifest from "./component/manifest";
import Navbar1 from "./component/navbar1";
import Sidebar from "./component/sidebar";
import Navbar3 from "./component/navbar3";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar3 />
                    <Navbar1 />
                    <Sidebar />
                    <Routes>
                        <Route element={<Sign />} path="/sign" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<About />} path="/about" />
                        <Route element={<Questions />} path="/questions" />
                        <Route element={<Manifest />} path="/manifest" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
    );
};

export default injectContext(Layout);
