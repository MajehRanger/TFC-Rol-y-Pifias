import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const SpellsComponent = () => {

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
            {sheet.spells && // Condicional
                sheet.spells.map((spell) => (
                    <div className="spell-list-group" key={spell.id}>
                        <div className="spell-list-item">{spell.name}</div>
                        <div className="spell-list-item">{spell.difficulty}</div>
                        <div className="spell-list-item">{spell.effect}</div>
                        <div className="spell-list-item">{spell.notes}</div>
                        {spell.variable && (
                            <div className="spell-list-item">Variable</div>
                        )}


                    </div>
                ))}
        </>
    );

}
