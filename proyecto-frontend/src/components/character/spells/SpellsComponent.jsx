import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";
import { FaDice } from "react-icons/fa";

export const SpellsComponent = () => {
    const [sheet, setSheets] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [totalResult, setTotalResult] = useState(0);
    const [spellName, setSpellName] = useState("");
    const [difficulty, setDifficulty] = useState(0);
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
    }, [token, sheetId]);

    const handleDiceRoll = (spellName, difficulty) => {
        const outcomes = [1, -1, 0];
        const roll = [];
        let total = 0;

        for (let i = 0; i < 4; i++) {
            const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
            roll.push(outcome);
            total += outcome;
        }
        setTotalResult(total);
        setSpellName(spellName);
        setDifficulty(difficulty);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
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
                        <button onClick={() => handleDiceRoll(spell.name, spell.difficulty)}>
                            <FaDice />
                        </button>
                    </div>
                ))}
            </div>

            {modalVisible && (
                <div className="spell-modal">
                    <div className="spell-modal-content">
                        <h3>Tirada de {spellName}</h3>
                        <h4>Dificultad: {difficulty}</h4>
                        <h4>Tirada:</h4>
                        <h4 className="spell-roll"> {totalResult}</h4>
                        <button className="lateral-btn" onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </>
    );
};
