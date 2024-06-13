import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import { FaArrowRightToBracket } from "react-icons/fa6";

export const HeaderComponent = () => {
  const { token, logout } = useContext(AuthContext);

  const handleLogout = () => {
      logout();
  };

  return (
    <header>
      <Link className="header-left" to="/welcome">
        <img src="src\assets\img\logoDado.png" alt="Logo" className="header-logo" />
        <div className="header-name">Rol y Pifias</div>
      </Link>
      <div className="header-right">
        <Link className="header-link" to="https://lauraguerrero.itch.io/secretos-del-mundo-magico"><button className="header-btn">Manuales</button></Link>
        {token != null && (
          <Link className="header-link" to="/profile"><button className="header-btn">Perfil</button></Link>
        )}
        {token != null && (
          <Link className="header-link" to="/" onClick={handleLogout}><button className="header-btn"><FaArrowRightToBracket className="btn-icon" /></button></Link>
        )}
      </div>
    </header>
  );
};
