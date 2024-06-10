import React from "react";
import "./HeaderComponent.css";
import {Link} from 'react-router-dom';
import PlayerService from '../../../services/PlayerService';


export const HeaderComponent = () => {

  const isAuthenticated = PlayerService.isAuthenticated();

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Quieres cerrar la sesión?");
    if(confirmLogout){
      PlayerService.logout();
    }
  }

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
        {isAuthenticated && (
          <button className="headerButton">
            <Link to="/profile">Perfil</Link>
          </button>
        )}
        {isAuthenticated && (
          <button className="headerButton">
            <Link to="/" onClick={handleLogout}>Salir</Link>
          </button>
        )}
      </div>
    </header>
  );
};
