import React from "react";
import {createRoot} from "react-dom/client";
import { StrictMode } from "react";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import "../src/scss/css/index.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
    <StrictMode>
        <App/>
    </StrictMode>
    </BrowserRouter>
)