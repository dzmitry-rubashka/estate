import React from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import {
  Home,
  Test,
  Property,
  Properties,
  MessageLogs,
} from "./pages/index.js";

export const AdminContext = createContext();

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/properties/:id" element={<Property />} />
        <Route path="/properties" element={<Properties />} />
        <Route
          path="/properties/:property_id/messages/:message_id"
          element={<MessageLogs />}
        />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

async function main() {
  const config = await fetch("/api/status").then((res) => res.json());
  const root = document.createElement("div");
  document.querySelector("body").appendChild(root);
  ReactDOM.createRoot(root).render(
    <AdminContext.Provider value={{ config }}>
      <App />
    </AdminContext.Provider>
  );
}

main();
