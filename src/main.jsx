import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Hoewerkthet from "./components/Hoewerkthet.jsx";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Feed from "./components/Feed.jsx";
import Settings from "./components/Settings.jsx";
import Maak from "./components/Maken.jsx";
import { auth } from "./firebase.js";

const Root = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hoewerkthet" element={<Hoewerkthet />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={localStorage.getItem('email') ? <Feed /> : <Navigate to="/login" />} />
          <Route path="/settings" element={localStorage.getItem('email') ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/Maak" element={<Maak />} />
          <Route path="*" element={<h1>Deze pagina bestaat niet man pa</h1>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
