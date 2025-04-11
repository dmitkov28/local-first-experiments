import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import People from "./People.tsx";
import Planets from "./Planets.tsx";
import Spaceships from "./Spaceships.tsx";

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
