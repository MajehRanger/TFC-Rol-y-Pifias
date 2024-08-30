import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const NotesComponent = () => {
    const [sheet, setSheet] = useState({ notes: [] }); // Inicializa con un objeto que contiene un array de notas
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    useEffect(() => {
        if (token && sheetId) {
            SheetService.getSheet(token, sheetId)
                .then((response) => {
                    setSheet(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [token, sheetId]);

    return (
        <div className="sheet-data-notes">
            <h2>Notas</h2>
            {sheet.notes && sheet.notes.length > 0 ? (
                <div className="notes-list">
                    {sheet.notes.map((note, index) => (
                        <div className="note-item" key={index}>
                            <p>{note}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay notas disponibles.</p>
            )}
        </div>
    );
};