import React from 'react';
import { Link } from 'react-router-dom';
import "./ListSheet.css";

export const MenuSheets = () => {
    return (
        <>
        <nav>
        <Link to="/new-sheet" className="link-btn"><button className="form-btn">Nueva Ficha</button></Link>
        </nav>
        </>
    );
};