import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";

export const DataSheetComponent = () => {
    const [sheet, setSheet] = useState({
        physicalStress: 0,
        mentalStress: 0,
        aspectos: [],
        proezas: [],
        wand: null,
        concepto: "",
        problema: ""
    });
    const { token } = useContext(AuthContext);
    const location = useLocation();
    const { sheetId } = location.state || {};

    useEffect(() => {
        SheetService.getSheet(token, sheetId)
            .then((response) => {
                setSheet(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [token, sheetId]);


    // Genera hasta 4 divs para proezas
    const generateProezaDivs = () => {
        const proezaCount = (sheet.proezas || []).length;
        const maxDivs = 4;
        const divs = [];

        for (let i = 0; i < maxDivs; i++) {
            if (i < proezaCount) {
                divs.push(
                    <div key={i}>{sheet.proezas[i] || "Desconocido"}</div>
                );
            } else {
                divs.push(
                    <div key={i} className="proeza-empty">

                    </div>
                );
            }
        }

        return divs;
    };

    return (
        <>
            <div className="sheet-data">
                <div className="sheet-data-col">
                    <div className="sheet-data-stress">
                        <h2>Estrés</h2>
                        <div className="data-stress">
                            <label htmlFor="">Físico</label>
                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={`phys-${index}`}
                                    type="checkbox"
                                    checked={sheet.physicalStress === index}
                                    disabled
                                />
                            ))}
                        </div>
                        <div className="data-stress">
                            <label htmlFor="">Mental</label>
                            {[0, 1, 2, 3].map((index) => (
                                <input
                                    key={`men-${index}`}
                                    type="checkbox"
                                    checked={sheet.mentalStress === index}
                                    disabled
                                />
                            ))}
                        </div>
                    </div>
                    <div className="sheet-data-consecuences">
                        <h2>Consecuencias</h2>
                        {[{ value: 2, label: 'Leve' }, { value: 4, label: 'Moderada' }, { value: 6, label: 'Severa' }, { value: 8, label: 'Extrema' }].map((item, index) => (
                            <div className="data-consecuences" key={index}>
                                <label htmlFor=""><span>{item.value}</span> {item.label}</label>
                                <div>
                                    {sheet[`consequence_${index}`] || ""}
                                </div>
                            </div>
                        ))}
                    </div>
                    {sheet.wand && (
                        <div className="sheet-data-wand">
                            <h2>Varita</h2>
                            <div className="data-wand">
                                <h5>Núcleo</h5>
                                <div className="wand-type">{sheet.wand.core?.name || "Desconocido"}</div>
                            </div>
                            <div className="data-wand">
                                <h5>Madera</h5>
                                <div className="wand-type">{sheet.wand.wood?.name || "Desconocido"}</div>
                            </div>
                            <div className="data-wand">
                                <h5>Características</h5>
                                <div className="wand-info">
                                    <div>{sheet.wand.wood?.bonus || "N/A"}</div>
                                    <div>{sheet.wand.wood?.notes || "N/A"}</div>
                                    <div>{sheet.wand.wood?.description || "N/A"}</div>
                                    <div>{sheet.wand.core?.description || "N/A"}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="sheet-data-col">
                    <div className="sheet-data-aspectos">
                        <h2>Aspectos</h2>
                        <div className="aspecto-box">
                            <h5>Concepto</h5>
                            <div className="aspecto">{sheet.concepto || "N/A"}</div>
                        </div>
                        <div className="aspecto-box">
                            <h5>Problema</h5>
                            <div className="aspecto">{sheet.problema || "N/A"}</div>
                        </div>
                        <div className="aspecto-box">
                            <h5>Aspectos</h5>
                            <div className="aspecto">
                                {(sheet.aspectos || []).map((aspecto, index) => (
                                    <div key={index}>{aspecto || "Desconocido"}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="sheet-data-proezas">
                        <h2>Proezas</h2>
                        <div className="proeza">
                            {generateProezaDivs()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};