import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/HeaderComponent";
import SheetService from "../../services/SheetService";
import { LateralSheetsMenu } from "../common/LateralSheetMenu";
import { DataSheetComponent } from "./sections/DataSheet";
import { EditEstilosComponent } from "./estilos/EditEstilosComponent";
import { SpellsComponent } from "./spells/SpellsComponent";
import { NotesComponent } from "./notes/NotesComponent";

export const EditCharacterSheet = () => {
    const [sheet, setSheet] = useState({});
    const [activeComponent, setActiveComponent] = useState('data');
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (token && sheetId) {
            SheetService.getSheet(token, sheetId)
                .then((response) => {
                    setSheet(response);
                })
                .catch((error) => {
                    console.error('Error fetching sheet:', error);
                });
        }
    }, [token, sheetId]);

    const handleSave = () => {
        SheetService.updateSheet(token, sheetId, sheet)
            .then(() => {
                navigate('/characterSheet', { state: { sheetId } });
            })
            .catch((error) => {
                console.error('Error saving sheet:', error);
            });
    };

    const handleChange = (field, value) => {
        setSheet(prevSheet => ({
            ...prevSheet,
            [field]: value
        }));
    };

    const handleMenuItemClick = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <>
            <HeaderComponent />
            <main className="sheet-data-main">
                <LateralSheetsMenu onMenuItemClick={handleMenuItemClick} />
                <div className="sheet-data-container">
                    <nav>
                        <button className="menu-btn" onClick={handleSave}>Guardar Ficha</button>
                        <Link to="/characterSheet" className="menu-link">
                            <button className="menu-btn">Volver</button>
                        </Link>
                    </nav>
                    {activeComponent === 'data' && <DataSheetComponent sheet={sheet} onChange={handleChange} />}
                    {activeComponent === 'estilos' && <EditEstilosComponent sheet={sheet} onChange={handleChange} />}
                    {activeComponent === 'spells' && <SpellsComponent sheet={sheet} onChange={handleChange} />}
                    {activeComponent === 'notes' && <NotesComponent sheet={sheet} onChange={handleChange} />}
                </div>
            </main>
        </>
    );
};
