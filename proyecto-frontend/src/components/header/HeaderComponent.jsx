import React from 'react'
import "./HeaderComponent.css";

export const HeaderComponent = () => {
  return (
    <header className="header">
        <div className="left">
            <img src="src\assets\img\logoDado.png" alt="Logo" className="logo"/>
            <span className="site-name">Rol y Pifias</span>
        </div>
        <div className="right">
          <button className="headerButton"><a href="https://lauraguerrero.itch.io/secretos-del-mundo-magico">Manuales</a></button>
          <button className="headerButton">Ajustes</button>
          <button className="headerButton">Salir</button>
        </div>
    </header>
  )
}
