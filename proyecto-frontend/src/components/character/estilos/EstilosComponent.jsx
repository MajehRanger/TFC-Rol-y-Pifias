import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";
import { FaDice } from "react-icons/fa";

export const EstilosComponent = () => {
    const [sheets, setSheets] = useState([]);
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    const [modalVisible, setModalVisible] = useState(false);
    const [rollResult, setRollResult] = useState(0);
    const [currentStyleValue, setCurrentStyleValue] = useState(0);

    useEffect(() => {
        if (token && sheetId) {
            SheetService.getSheet(token, sheetId)
                .then((response) => {
                    setSheets(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [token, sheetId]);

    const rollFateDice = () => {
        const diceFaces = [-1, 0, 1];
        let total = 0;
        for (let i = 0; i < 4; i++) {
            total += diceFaces[Math.floor(Math.random() * diceFaces.length)];
        }
        return total;
    };

    const handleDiceRoll = (styleValue) => {
        const result = rollFateDice();
        setRollResult(result + styleValue);  
        setCurrentStyleValue(styleValue);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div className="sheet-data-estilos">
            <h2>Estilos</h2>
            <div className="data-estilos">
                {Object.entries(sheets.estilos || {}).map(([key, value]) => (
                    key !== 'id' && (
                        <div className="estilo" key={key}>
                            <div className="estilo-name"><h5>{key}:</h5></div>
                            <div className="estilo-value">{value}</div>
                            <button onClick={() => handleDiceRoll(value)}>
                                <FaDice />
                            </button>
                        </div>
                    )
                ))}
            </div>

            {modalVisible && (
                <div className="dice-modal" style={{ display: 'block' }}>
                    <div className="dice-modal-content">
                        <h3>Tirada</h3>
                        <div className="dice-result">
                            <h4 className="dice-roll">{rollResult - currentStyleValue}</h4>
                            <h5>+</h5>
                            <h4>{currentStyleValue}</h4>
                            <h5>=</h5>
                            <h4>{rollResult}</h4>
                        </div>
                        <button className="lateral-btn" onClick={closeModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};
