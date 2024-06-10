import React, { useContext } from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../App";

export const HeaderComponent = () => {
  const { token, logout } = useContext(AuthContext);

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Quieres cerrar la sesión?");
    if (confirmLogout) {
      logout();
    }
  };

  return (
    <header className="header">
      <div className="left">
        <img src="src\assets\img\logoDado.png" alt="Logo" className="logo" />
        <span className="site-name">Rol y Pifias</span>
      </div>
      <div className="right">
        <button className="headerButton">
          <a href="https://lauraguerrero.itch.io/secretos-del-mundo-magico">
            Manuales
          </a>
        </button>
        {token != null && (
          <button className="headerButton">
            <Link to="/profile">Perfil</Link>
          </button>
        )}
        {token != null && (
          <button className="headerButton">
            <Link to="/" onClick={handleLogout}>
              Salir
            </Link>
          </button>
        )}
      </div>
    </header>
  );
};
