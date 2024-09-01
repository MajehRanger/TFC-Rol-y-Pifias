import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import SheetService from "../../../services/SheetService";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const EditSpellsComponent = ({ sheet, onChange }) => {
    const [availableSpells, setAvailableSpells] = useState([]);
    const [selectedSpellId, setSelectedSpellId] = useState(null); // Use null initially
    const { token } = useContext(AuthContext);

    useEffect(() => {
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

        if (selectedSpellId === null) {
            console.error("No spell selected.");
            return;
        }

        // Convierte selectedSpellId a numero
        const spellIdNumber = Number(selectedSpellId);
        const selectedSpell = availableSpells.find(spell => spell.id === spellIdNumber);


        if (selectedSpell) {
            // Asegura que el hechizo no este ya en la lista
            if (!sheet.spells.find(spell => spell.id === selectedSpell.id)) {
                const updatedSpells = [...sheet.spells, selectedSpell];

                onChange('spells', updatedSpells);
                setSelectedSpellId(null);
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
                <div className="spell-list-item"><h4>Nombre</h4></div>
                <div className="spell-list-item"><h4>Dificultad</h4></div>
                <div className="spell-list-item"><h4>Efecto</h4></div>
                <div className="spell-list-item"><h4>Notas</h4></div>
                <div className="spell-list-item"><h4>Variable</h4></div>
                <div className="spell-list-item"></div>
            </div>
            {sheet.spells && sheet.spells.map((spell) => (
                <div className="spell-list-group" key={spell.id}>
                    <div className="spell-list-item">{spell.name}</div>
                    <div className="spell-list-item">{spell.difficulty}</div>
                    <div className="spell-list-item">{spell.effect}</div>
                    <div className="spell-list-item">{spell.notes}</div>
                    <div className="spell-list-item">{spell.variable ? 'Sí' : 'No'}</div>
                    <button className="sheet-list-btn" onClick={() => handleRemoveSpell(spell.id)}><MdDelete className="btn-icon" /></button>
                </div>
            ))}

            <div className="spell-add">
                <select className="spell-select"
                    value={selectedSpellId || ""}
                    onChange={(e) => setSelectedSpellId(Number(e.target.value))}
                >
                    <option>Selecciona un hechizo</option>
                    {availableSpells.map(spell => (
                        <option key={spell.id} value={spell.id}>{spell.name}</option>
                    ))}
                </select>
                <button className="spell-btn" onClick={handleAddSpell}>Añadir Hechizo</button>
            </div>
        </div>
    );
};
