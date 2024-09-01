import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const EditEstilosComponent = ({ onChange }) => {
    const [sheets, setSheets] = useState({});
    const [editedValues, setEditedValues] = useState({});
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    useEffect(() => {
        if (token && sheetId) {
            SheetService.getSheet(token, sheetId)
                .then((response) => {
                    setSheets(response);
                    setEditedValues(response.estilos || {});
                })
                .catch((error) => {
                    console.error('Error fetching sheet:', error);
                });
        }
    }, [token, sheetId]);

    const handleChange = (e, key) => {
        const newValue = e.target.value;
        setEditedValues(prevValues => {
            const updatedValues = { ...prevValues, [key]: newValue };
            // LLama onChange para actualizar la sheet del componente Padre
            if (onChange) {
                onChange('estilos', updatedValues);
            }
            return updatedValues;
        });
    };

    return (
        <div className="sheet-data-estilos">
            <h2>Estilos</h2>
            <div className="data-estilos">
                {Object.entries(sheets.estilos || {}).map(([key, value]) => (
                    key !== 'id' && (
                        <div className="estilo" key={key}>
                            <div className="estilo-name"><h5>{key}:</h5></div>
                            <div className="estilo-value">
                                <input
                                    type="number"
                                    value={editedValues[key] || ''}
                                    onChange={(e) => handleChange(e, key)}
                                />
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

