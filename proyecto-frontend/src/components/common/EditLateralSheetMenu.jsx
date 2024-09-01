import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../services/SheetService";
import { FaListAlt, FaMagic, FaRegStickyNote, FaStar, FaAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

export const EditLateralSheetsMenu = ({ onMenuItemClick, sheet, onChange }) => {
    const [editedSheet, setEditedSheet] = useState({});
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    useEffect(() => {
        if (sheet) {
            setEditedSheet(sheet);
        }
    }, [sheet]);

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedSheet((prevSheet) => ({
            ...prevSheet,
            [name]: value,
        }));

        if (onChange) {
            onChange(name, value);
        }
    };


    return (
        <div className="lateral-menu-container">
            <div className="lateral-data">
                <img src="https://cdn.icon-icons.com/icons2/2717/PNG/512/user_square_icon_173488.png" alt="" />
                <h3>
                    <input
                        type="text"
                        name="characterName"
                        value={editedSheet.characterName || ""}
                        onChange={handleInputChange}
                    />
                </h3>
                <div className="lateral-data-points">
                    <div>
                        <label>PD:</label>
                        <input
                            type="number"
                            name="pd"
                            value={editedSheet.pd || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>PX:</label>
                        <input
                            type="number"
                            name="px"
                            value={editedSheet.px || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
            <div className="lateral-menu-btns">
                <div className="lateral-menu-up">
                    <button
                        className={`lateral-btn ${activeButton.data ? 'active' : ''}`}
                        onClick={() => handleButtonClick('data')}>
                        <FaAddressCard /> Datos
                    </button>
                    <button
                        className={`lateral-btn ${activeButton.estilos ? 'active' : ''}`}
                        onClick={() => handleButtonClick('estilos')}>
                        <FaStar /> Estilos
                    </button>
                    <button
                        className={`lateral-btn ${activeButton.spells ? 'active' : ''}`}
                        onClick={() => handleButtonClick('spells')}>
                        <FaMagic /> Hechizos
                    </button>
                    <button
                        className={`lateral-btn ${activeButton.notes ? 'active' : ''}`}
                        onClick={() => handleButtonClick('notes')}>
                        <FaRegStickyNote /> Notas
                    </button>
                </div>
            </div>
            <div className="lateral-menu-down">
                <Link className="lateral-link" to="/sheets" onClick={() => handleButtonClick('sheets')}>
                    <button className={`lateral-btn ${activeButton.sheets ? 'active' : ''}`}>
                        <FaListAlt /> Lista Fichas
                    </button>
                </Link>
            </div>
        </div>
    );
};
