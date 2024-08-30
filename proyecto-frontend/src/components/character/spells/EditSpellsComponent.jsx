import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import SheetService from "../../../services/SheetService";

export const EditSpellsComponent = ({ sheet, onChange }) => {
    const [availableSpells, setAvailableSpells] = useState([]);
    const [selectedSpellId, setSelectedSpellId] = useState(null); // Use null initially
    const { token } = useContext(AuthContext);

    useEffect(() => {
        // Fetch available spells from the API
        SheetService.getAllSpells(token)
            .then((response) => {
                console.log("Available spells from API:", response);
                setAvailableSpells(response);
            })
            .catch((error) => {
                console.error('Error fetching spells:', error);
            });
    }, [token]);

    const handleRemoveSpell = (spellId) => {
        const updatedSpells = sheet.spells.filter(spell => spell.id !== spellId);
        onChange('spells', updatedSpells);
    };

    const handleAddSpell = () => {
        console.log("Selected Spell ID:", selectedSpellId);
        console.log("Available Spells:", availableSpells);

        if (selectedSpellId === null) {
            console.error("No spell selected.");
            return;
        }

        // Convert selectedSpellId to a number if it's a string
        const spellIdNumber = Number(selectedSpellId);
        const selectedSpell = availableSpells.find(spell => spell.id === spellIdNumber);

        console.log("Selected Spell:", selectedSpell);

        if (selectedSpell) {
            // Ensure the spell isn't already in the list
            if (!sheet.spells.find(spell => spell.id === selectedSpell.id)) {
                const updatedSpells = [...sheet.spells, selectedSpell];
                
                onChange('spells', updatedSpells);
                setSelectedSpellId(null); // Reset the select input
            } else {
                alert("El hechizo ya está en la lista.");
            }
        } else {
            console.error("No spell found with id:", spellIdNumber);
        }
    };

    return (
        <div className="sheet-data-spells">
            <h2>Hechizos</h2>
            <div className="spell-list-group">
                <div className="spell-list-item"><h3>Nombre</h3></div>
                <div className="spell-list-item"><h3>Dificultad</h3></div>
                <div className="spell-list-item"><h3>Efecto</h3></div>
                <div className="spell-list-item"><h3>Notas</h3></div>
                <div className="spell-list-item"><h3>Variable</h3></div>
                <div className="spell-list-item"></div>
            </div>
            {sheet.spells && sheet.spells.map((spell) => (
                <div className="spell-list-group" key={spell.id}>
                    <div className="spell-list-item">{spell.name}</div>
                    <div className="spell-list-item">{spell.difficulty}</div>
                    <div className="spell-list-item">{spell.effect}</div>
                    <div className="spell-list-item">{spell.notes}</div>
                    <div className="spell-list-item">{spell.variable ? 'Sí' : 'No'}</div>
                    <button onClick={() => handleRemoveSpell(spell.id)}>Eliminar</button>
                </div>
            ))}

            <div className="add-spell">
                <select
                    value={selectedSpellId || ""}
                    onChange={(e) => setSelectedSpellId(Number(e.target.value))} // Convert to number here
                >
                    <option value="">Selecciona un hechizo</option>
                    {availableSpells.map(spell => (
                        <option key={spell.id} value={spell.id}>{spell.name}</option>
                    ))}
                </select>
                <button onClick={handleAddSpell}>Añadir Hechizo</button>
            </div>
        </div>
    );
};
