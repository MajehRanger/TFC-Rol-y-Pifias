import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../App";
import SheetService from "../../services/SheetService";
import { HeaderComponent } from "../common/HeaderComponent";
import { DataSheetComponent } from "./sheetData/DataSheet";
import { EditLateralSheetsMenu } from "../common/EditLateralSheetMenu";
import { EditEstilosComponent } from "./estilos/EditEstilosComponent";
import { EditSpellsComponent } from "./spells/EditSpellsComponent";
import { EditNotesComponent } from "./notes/EditNotesComponent";

export const NewCharacterSheet = () => {
    const [sheet, setSheet] = useState({
        notes: [],
        spells: [],
        // Inicializa otros campos según sea necesario
    });
    const [activeComponent, setActiveComponent] = useState('data');
    const [isEditing, setIsEditing] = useState(true);
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (field, value) => {
        setSheet((prevSheet) => ({
            ...prevSheet,
            [field]: value,
        }));
    };

    const handleSave = () => {
        SheetService.createSheet(token, sheet)
            .then((response) => {
                alert("Ficha creada y guardada");
                navigate(`/character-sheet/${response.id}`); // Redirige a la nueva ficha con el ID generado
            })
            .catch((error) => {
                console.error('Error creating sheet:', error);
            });
    };

    const handleCancel = () => {
        navigate(-1);
    };

    const handleMenuItemClick = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <>
            <HeaderComponent />
            <main className="sheet-data-main">
                <EditLateralSheetsMenu onMenuItemClick={handleMenuItemClick} />
                <div className="sheet-data-container">
                    <nav>
                        <button className="menu-btn" onClick={handleSave}>
                            Guardar Nueva Ficha
                        </button>
                        <button className="menu-btn" onClick={handleCancel}>Cancelar</button>
                    </nav>
                    {activeComponent === 'data' && <DataSheetComponent sheet={sheet} onChange={handleChange} />}
                    {activeComponent === 'estilos' && <EditEstilosComponent sheet={sheet} onChange={handleChange} />}
                    {activeComponent === 'spells' && <EditSpellsComponent sheet={sheet} onChange={handleChange} />}
                    {activeComponent === 'notes' && <EditNotesComponent sheet={sheet} onChange={handleChange} />}
                </div>
            </main>
        </>
    );
};
