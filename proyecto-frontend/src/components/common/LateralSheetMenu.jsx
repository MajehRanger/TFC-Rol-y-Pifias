import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../services/SheetService";
import { FaListAlt, FaMagic, FaRegStickyNote, FaStar, FaUserPlus, FaAddressCard } from "react-icons/fa";

export const LateralSheetsMenu = ({ onMenuItemClick }) => {

    const [sheet, setSheet] = useState([]);
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    useEffect(() => {
        SheetService.getSheet(token, sheetId)
            .then((response) => {
                setSheet(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token, sheetId]);


    const [activeButton, setActiveButton] = useState({
        data: true,
        estilos: false,
        spells: false,
        notes: false,
    });

    const handleButtonClick = (buttonName) => {
        setActiveButton({
            data: buttonName === 'data',
            estilos: buttonName === 'estilos',
            spells: buttonName === 'spells',
            notes: buttonName === 'notes',
        });

        if (onMenuItemClick) {
            onMenuItemClick(buttonName);
        }
    };

    return (
        <div className="lateral-menu-container">
            <div className="lateral-data">
                <img src="https://cdn.icon-icons.com/icons2/2717/PNG/512/user_square_icon_173488.png" alt="" />
                <h3>{sheet.characterName}</h3>
                <div className="lateral-data-points">
                    <h5>PD:{sheet.pd}</h5>
                    <h5>PX:{sheet.px}</h5>
                </div>
            </div>
            <div className="lateral-menu-btns">
                <div className="lateral-menu-up">
                    <button
                        className={`lateral-btn ${activeButton.data ? 'active' : ''}`}
                        onClick={() => handleButtonClick('data', '/data')}>
                        <FaAddressCard /> Datos
                    </button>
                    <button
                        className={`lateral-btn ${activeButton.estilos ? 'active' : ''}`}
                        onClick={() => handleButtonClick('estilos', '/estilos')}>
                        <FaStar /> Estilos
                    </button>
                    <button
                        className={`lateral-btn ${activeButton.spells ? 'active' : ''}`}
                        onClick={() => handleButtonClick('spells', '/spells')}>
                        <FaMagic /> Hechizos
                    </button>
                    <button
                        className={`lateral-btn ${activeButton.notes ? 'active' : ''}`}
                        onClick={() => handleButtonClick('notes', '/notes')}>
                        <FaRegStickyNote /> Notas
                    </button>
                </div>
            </div>
            <div className="lateral-menu-down">

                <Link className="lateral-link" to="/sheets" onClick={() => handleButtonClick('sheets')}>
                    <button className={`lateral-btn ${activeButton.sheets ? 'active' : ''}`}><FaListAlt /> Lista Fichas</button>
                </Link>
            </div>
        </div>
    );
};
