import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const AspectosComponent = () => {

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
        <div className="sheet-data-aspectos">
            <h2>Aspectos</h2>
            <div className="aspecto-box">
                <h5>Concepto</h5>
                <div className="aspecto">{sheet.concepto}</div>
            </div>
            <div className="aspecto-box">
                <h5>Problema</h5>
                <div className="aspecto">{sheet.problema}</div>
            </div>
            <div className="aspecto-box">
                <div className="aspecto">
                    {sheet.aspectos ? (
                        sheet.aspectos.map((aspecto) => (
                            <div>{aspecto}</div>
                        ))) : (<div>Vacio</div>)}
                </div>
            </div>

        </div>
    )

}