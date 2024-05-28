import React from 'react'
import "./LateralComponent.css";

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
                <i>⊞</i>
                <span>Lista Fichas</span>
            </button>
        </div>
    </div>
  )
}