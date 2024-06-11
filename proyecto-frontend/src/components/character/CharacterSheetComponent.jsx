import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/header/HeaderComponent";
import {LateralComponent} from "../common/lateral-menu/LateralMenuComponent"
import { useLocation } from "react-router-dom";
import SheetService from "../../services/SheetService"
import "./CharacterSheet.css"

export const CharacterSheet = () => {

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
        <>
            <HeaderComponent />
            <main className="sheet-main">
                <LateralComponent />
                <div className="sheet-container">
                    <div className="character-data">
                        <div>Nombre: {sheet.characterName}</div>
                        <div>Puntos Destino: {sheet.pd}</div>
                        <div>Puntos Experiencia: {sheet.px}</div>
                        <div>Descripción: {sheet.description}</div>
                    </div>
                </div>
            </main>
        </>
    )
}