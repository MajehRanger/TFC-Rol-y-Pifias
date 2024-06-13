import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../services/SheetService";
import { FaListAlt, FaMagic, FaRegStickyNote, FaStar, FaUserPlus, FaAddressCard } from "react-icons/fa";

export const LateralSheetsMenu = () => {

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
    }, []);

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
                    <Link className="lateral-link" to="/data">
                        <button className="lateral-btn"><FaAddressCard /> Datos</button></Link>
                    <Link className="lateral-link" to="/estilos">
                        <button className="lateral-btn"><FaStar /> Estilos</button></Link>
                    <Link className="lateral-link" to="/spells">
                        <button className="lateral-btn"><FaMagic /> Hechizos</button></Link>
                    <Link className="lateral-link" to="/notes">
                        <button className="lateral-btn"><FaRegStickyNote /> Notas</button></Link>
                </div>
            </div>
            <div className="lateral-menu-down">
                <Link className="lateral-link" to="/new-sheet">
                    <button className="lateral-btn"><FaUserPlus /> Nueva Fichas</button></Link>
                <Link className="lateral-link" to="/sheets">
                    <button className="lateral-btn"><FaListAlt /> Lista Fichas</button></Link>
            </div>
        </div>
    )
}