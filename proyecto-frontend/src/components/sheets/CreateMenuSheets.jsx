import React from 'react';
import { Link } from 'react-router-dom';

export const CreateMenuSheets = () => {
    return (
        <>
        <nav>
        <Link to="/newSheet" className="menu-link"><button className="menu-btn">Nueva Ficha</button></Link>
        </nav>
        </>
    );
};