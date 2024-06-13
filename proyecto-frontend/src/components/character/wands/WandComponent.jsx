import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const WandComponent = () => {

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
        <>
            {sheet.wand && (
                <div className="sheet-data-wand">
                    <h2>Varita</h2>
                    <div className="data-wand">
                        <h5>Núcleo</h5>
                        <div className="wand-type">{sheet.wand.core.name}</div>
                    </div>
                    <div className="data-wand">
                        <h5>Madera</h5>
                        <div className="wand-type">{sheet.wand.wood.name}</div>
                    </div>
                    <div className="data-wand">
                        <h5>Características</h5>
                        <div className="wand-info">
                            <div>{sheet.wand.wood.bonus}</div>
                            <div>{sheet.wand.wood.notes}</div>
                            <div>{sheet.wand.wood.description}</div>
                            <div>{sheet.wand.core.description}</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

}