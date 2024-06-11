import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/header/HeaderComponent";
import { MenuSheets } from "./MenuSheets";
import SheetService from "../../services/SheetService"
import { useNavigate} from 'react-router-dom';

import "./ListSheet.css";

export const Sheets = () => {

    const [sheets, setSheets] = useState([]);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    

    useEffect(() => {
        SheetService.allSheets(token)
            .then((response) => {
                setSheets(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleSheet = (sheetId) => {
        navigate('/CharacterSheet', { state: { sheetId } });
    };


    return (
        <>
            <HeaderComponent />
            <MenuSheets />
            <main className="main-list">
                <div className="sheet-list-container">
                    <div className="sheet-list-group-title">
                        <div className="sheet-list-item">Nombre</div>
                        <div className="sheet-list-item">Breve descripción</div>
                        <div className="sheet-list-btn"></div>
                        <div className="sheet-list-btn"></div>
                    </div>
                    {sheets && // Condicional para renderizar solo si sheets no es null
                        sheets.map((sheet) => (
                    <div className="sheet-list-group">
                        <div className="sheet-list-item">{sheet.characterName}</div>
                        <div className="sheet-list-item">{sheet.description}</div>
                        <div className="sheet-list-btn"><button onClick={() => handleSheet(sheet.id)}>F</button></div>
                        <div className="sheet-list-btn"><button onClick={() => handleDelete(sheet.id)}>E</button></div>
                    </div>
                    ))}
                </div>
            </main>


        </>
    );
};