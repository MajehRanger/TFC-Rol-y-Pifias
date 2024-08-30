import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/HeaderComponent";
import { useLocation } from "react-router-dom";
import SheetService from "../../services/SheetService";
import { LateralSheetsMenu } from "../common/LateralSheetMenu";
import { DataSheetComponent } from "./sections/DataSheet";


export const EditCharacterSheet = () => {

    const [sheet, setSheet] = useState([]);
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};
    console.log(sheetId);
    useEffect(() => {
        SheetService.getSheet(token, sheetId)
            .then((response) => {
                setSheet(response);
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
            <main className="sheet-data-main">
                <LateralSheetsMenu />
                <div className="sheet-data-container">
                <nav>
        <Link to="/characterSheet" className="menu-link" onClick={() => handleSheet(sheet.id)}><button className="menu-btn">Guardar ficha</button></Link>
        </nav>
                    <DataSheetComponent />
                    </div>
            </main>
        </>
    )

}