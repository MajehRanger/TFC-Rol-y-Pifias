import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/HeaderComponent";
import { CreateMenuSheets } from "./CreateMenuSheets";
import SheetService from "../../services/SheetService"
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const SheetsList = () => {

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
            <CreateMenuSheets />
            <main className="main-sheet-list">
                <div className="sheet-list-container">
                    <div className="sheet-list-group-title">
                        <div className="sheet-list-item">Nombre</div>
                        <div className="sheet-list-item">Breve descripción</div>
                        <div className="sheet-list-item"></div>
                    </div>
                    {sheets && // Condicional para renderizar solo si sheets no es null
                        sheets.map((sheet) => (
                            <div className="sheet-list-group" key={sheet.id}>
                                <div className="sheet-list-item">{sheet.characterName}</div>
                                <div className="sheet-list-item">{sheet.description}</div>
                                <div className="sheet-list-item">
                                    <button className="sheet-list-btn" onClick={() => handleSheet(sheet.id)}><FaEdit className="btn-icon" /></button>
                                    <button className="sheet-list-btn" onClick={() => handleDelete(sheet.id)}><MdDelete className="btn-icon" /></button>
                                </div>
                            </div>
                        ))}
                </div>
            </main>


        </>
    );
};