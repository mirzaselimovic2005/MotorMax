import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Maak from "./components/Maak.jsx";
import Feed from "./components/Feed.jsx";
import Settings from "./components/Settings.jsx";
import Vrienden from "./components/Vrienden.jsx";

const Root = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/maak" element={localStorage.getItem('email') ? <Maak /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={localStorage.getItem('email') ? <Feed /> : <Navigate to="/login" />} />
          <Route path="/settings" element={localStorage.getItem('email') ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/vrienden" element={localStorage.getItem('email') ? <Vrienden /> : <Navigate to="/login" />} />
          <Route path="*" element={<h1>Deze pagina bestaat niet man pa</h1>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);