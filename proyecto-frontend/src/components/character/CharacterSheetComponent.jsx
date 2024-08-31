import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/HeaderComponent";
import SheetService from "../../services/SheetService";
import { LateralSheetsMenu } from "../common/LateralSheetMenu";
import { DataSheetComponent } from "./sheetData/DataSheet";
import { EstilosComponent } from "./estilos/EstilosComponent";
import { EditEstilosComponent } from "./estilos/EditEstilosComponent";
import { SpellsComponent } from "./spells/SpellsComponent";
import { NotesComponent } from "./notes/NotesComponent";
import { EditNotesComponent } from "./notes/EditNotesComponent";
import { EditSpellsComponent } from "./spells/EditSpellsComponent";
import { EditDataSheetComponent } from "./sheetData/EditDataSheetComponent";
import { EditLateralSheetsMenu } from "../common/EditLateralSheetMenu";

export const CharacterSheet = () => {
    const [sheet, setSheet] = useState({});
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};
    const [activeComponent, setActiveComponent] = useState('data');
    const [isEditing, setIsEditing] = useState(false);

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

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        SheetService.updateSheet(token, sheetId, sheet)
            .then(() => {
                setIsEditing(false);
            })
            .catch((error) => {
                console.error('Error saving sheet:', error);
            });
    };

    const handleChange = (field, value) => {
        setSheet(prevSheet => {
            // Desglosa el campo por el delimitador '.'
            const keys = field.split('.');
            let updatedSheet = { ...prevSheet };

            if (keys.length === 1) {
                updatedSheet[keys[0]] = value;
            } else {
                updatedSheet = {
                    ...prevSheet,
                    [keys[0]]: {
                        ...prevSheet[keys[0]],
                        [keys[1]]: value
                    }
                };
            }

            return updatedSheet;
        });
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleMenuItemClick = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <>
            <HeaderComponent />
            <main className="sheet-data-main">
                {isEditing ? (
                    <EditLateralSheetsMenu
                        onMenuItemClick={handleMenuItemClick}
                        sheet={sheet}
                        onChange={handleChange}
                    />
                ) : (
                    <LateralSheetsMenu onMenuItemClick={handleMenuItemClick} />
                )}
                <div className="sheet-data-container">
                    <nav>
                        {isEditing ? (
                            <>
                                <button className="menu-btn" onClick={handleSave}>Guardar Ficha</button>
                                <button className="menu-btn" onClick={handleCancel}>Volver</button>
                            </>
                        ) : (
                            sheetId && (
                                <button className="menu-btn" onClick={handleEdit}>
                                    EDITAR FICHA
                                </button>
                            )
                        )}
                    </nav>
                    {isEditing ? (
                        <>
                            {activeComponent === 'data' && <EditDataSheetComponent sheet={sheet} onChange={handleChange} />}
                            {activeComponent === 'estilos' && <EditEstilosComponent sheet={sheet} onChange={handleChange} />}
                            {activeComponent === 'spells' && <EditSpellsComponent sheet={sheet} onChange={handleChange} />}
                            {activeComponent === 'notes' && <EditNotesComponent sheet={sheet} onChange={handleChange} />}
                        </>
                    ) : (
                        <>
                            {activeComponent === 'data' && <DataSheetComponent sheet={sheet} />}
                            {activeComponent === 'estilos' && <EstilosComponent sheet={sheet} />}
                            {activeComponent === 'spells' && <SpellsComponent sheet={sheet} />}
                            {activeComponent === 'notes' && <NotesComponent sheet={sheet} />}
                        </>
                    )}
                </div>
            </main>
        </>
    );
};
