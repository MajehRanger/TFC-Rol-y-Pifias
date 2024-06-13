import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";
import { FaDice } from "react-icons/fa";



export const EstilosComponent = () => {

    const [sheets, setSheets] = useState([]);
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    useEffect(() => {
        SheetService.getSheet(token, sheetId)
            .then((response) => {
                setSheets(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="sheet-data-estilos">
            <h2>Estilos</h2>
            {sheets.estilos &&
                <div className="data-estilos">
                    {Object.entries(sheets.estilos).map(([key, value]) => (
                        key !== 'id' && (
                            <div className="estilo" key={key}>
                                <div className="estilo-name">{key}:</div>
                                <div className="estilo-value">{value}</div>
                                <button><FaDice /></button>
                            </div>
                        )
                    ))}
                </div>
            }
        </div>

    )


}
