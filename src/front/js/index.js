//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";
import "./index.css";

//import your own components
import Layout from "./layout";
import { ThemeProvider } from "@material-tailwind/react";
//render your react application
ReactDOM.render(
    <ThemeProvider>
        <Layout />
    </ThemeProvider>
    , document.querySelector("#app"));
