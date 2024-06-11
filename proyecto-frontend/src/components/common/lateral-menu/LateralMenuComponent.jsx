import React from 'react'
import "./LateralMenuComponent.css";
import { Link } from "react-router-dom";

export const LateralComponent = () => {
  return (
    <div className="sideMenu">
        <div className="menu">
            <button className="menu-item">
                <i>⊞</i>
                <span>Datos</span>
            </button>
            <button className="menu-item">
                <i>⊞</i>
                <span>Estilos</span>
            </button>
            <button className="menu-item">
                <i>⊞</i>
                <span>Hechizos</span>
            </button>
            <button className="menu-item">
                <i>⊞</i>
                <span>Inventario</span>
            </button>
            <button className="menu-item">
                <i>⊞</i>
                <span>Notas</span>
            </button>
        </div>
        <div className="final-menu">
            <button className="menu-item">
                <i>⊞</i>
                <span>Nueva Ficha</span>
            </button>
            <button className="menu-item">
            <Link to="/sheets"><i>⊞</i>
            <span>Lista Fichas</span></Link>
          </button>
        </div>
    </div>
  )
}