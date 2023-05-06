import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { Test, Properties, Property } from "./pages";

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/test" element={<Test />} />
        <Route path="property/:id" element={<Property />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

async function main() {
  const root = document.createElement("div");
  document.querySelector("body").appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();
