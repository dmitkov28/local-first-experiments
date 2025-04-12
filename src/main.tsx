import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import AppLayout from "./AppLayout.tsx";
import "./index.css";
import People from "./People.tsx";
import Planets from "./Planets.tsx";
import SearchCharactersContainer from "./SearchCharactersContainer.tsx";
import SearchPlanetsContainer from "./SearchPlanetsContainer.tsx";
import SearchSpaceshipsContainer from "./SearchSpaceshipsContainer.tsx";
import Spaceships from "./Spaceships.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/people" element={<SearchCharactersContainer />} />
          <Route path="/people/:id" element={<People />} />

          <Route path="/planets" element={<SearchPlanetsContainer />} />
          <Route path="/planets/:id" element={<Planets />} />

          <Route path="/spaceships" element={<SearchSpaceshipsContainer />} />
          <Route path="/spaceships/:id" element={<Spaceships />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
