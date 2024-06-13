import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const ProezasComponent = () => {

    const [sheet, setSheets] = useState([]);
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
        <div className="sheet-data-proezas">
            <h2>Proezas</h2>
            {sheet.proezas ? (
                sheet.aspectos.map((proeza) => (
                    <div className="proeza">{proeza}</div>
                ))) : (
                <div className="proeza">Vacio</div>
            )}
        </div>

    )

}