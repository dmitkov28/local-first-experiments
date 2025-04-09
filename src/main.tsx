import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import { Route } from "react-router";
import People from "./People.tsx";
import Spaceships from "./Spaceships.tsx";
import Planets from "./Planets.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/people/:id" element={<People />} />
        <Route path="/spaceships/:id" element={<Spaceships />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
