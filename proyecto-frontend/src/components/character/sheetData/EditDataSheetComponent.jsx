import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../App";
import SheetService from "../../../services/SheetService";

export const EditDataSheetComponent = ({ sheet, onChange }) => {
    const [editedSheet, setEditedSheet] = useState(sheet);
    const [wandCores, setWandCores] = useState([]);
    const [wandWoods, setWandWoods] = useState([]);
    const [selectedCore, setSelectedCore] = useState(sheet.wand?.core?.id || "");
    const [selectedWood, setSelectedWood] = useState(sheet.wand?.wood?.id || "");
    const { token } = useContext(AuthContext);

    // Fetch wand cores and woods on mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [cores, woods] = await Promise.all([
                    SheetService.getAllWandCores(token),
                    SheetService.getAllWandWoods(token),
                ]);
                setWandCores(cores);
                setWandWoods(woods);
            } catch (error) {
                console.error("Error fetching wand data:", error);
            }
        };

        fetchData();
    }, [token]);

    // Synchronize editedSheet with sheet prop
    useEffect(() => {
        setEditedSheet(sheet);
        setSelectedCore(sheet.wand?.core?.id || "");
        setSelectedWood(sheet.wand?.wood?.id || "");
    }, [sheet]);

    const handleChange = (e, field) => {
        const { value } = e.target;
        setEditedSheet(prevSheet => {
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

        if (onChange) onChange(field, value);
    };

    const handleWandChange = (e, field) => {
        const { value } = e.target;

        if (field === 'core.id') {
            setSelectedCore(value);
            setEditedSheet(prevSheet => ({
                ...prevSheet,
                wand: {
                    ...prevSheet.wand,
                    core: { ...prevSheet.wand.core, id: value },
                },
            }));
        } else if (field === 'wood.id') {
            setSelectedWood(value);
            setEditedSheet(prevSheet => ({
                ...prevSheet,
                wand: {
                    ...prevSheet.wand,
                    wood: { ...prevSheet.wand.wood, id: value },
                },
            }));
        }

        if (onChange) onChange(field, value);
    };

    const handleAspectosChange = (e, index) => {
        const { value } = e.target;
        setEditedSheet(prevSheet => {
            const updatedAspectos = [...prevSheet.aspectos];
            updatedAspectos[index] = value;
            return {
                ...prevSheet,
                aspectos: updatedAspectos,
            };
        });

        if (onChange) onChange(`aspectos[${index}]`, value);
    };

    const handleProezasChange = (e, index) => {
        const { value } = e.target;
        setEditedSheet(prevSheet => {
            const updatedProezas = [...prevSheet.proezas];
            updatedProezas[index] = value;
            return {
                ...prevSheet,
                proezas: updatedProezas,
            };
        });

        if (onChange) onChange(`proezas[${index}]`, value);
    };

    const handleStressChange = (type, index) => {
        setEditedSheet(prevSheet => ({
            ...prevSheet,
            [`${type}Stress`]: index,
        }));

        if (onChange) onChange(`${type}Stress`, index);
    };

    return (
        <div className="sheet-data">
            <div>
                <div className="sheet-data-stress">
                    <h2>Estrés</h2>
                    <div className="data-stress">
                        <label htmlFor="">Físico</label>
                        {[0, 1, 2, 3].map(index => (
                            <label key={`phys-${index}`}>
                                <input
                                    type="radio"
                                    name="physicalStress"
                                    value={index}
                                    checked={editedSheet.physicalStress === index}
                                    onChange={() => handleStressChange('physical', index)}
                                />
                                {index}
                            </label>
                        ))}
                    </div>
                    <div className="data-stress">
                        <label htmlFor="">Mental</label>
                        {[0, 1, 2, 3].map(index => (
                            <label key={`men-${index}`}>
                                <input
                                    type="radio"
                                    name="mentalStress"
                                    value={index}
                                    checked={editedSheet.mentalStress === index}
                                    onChange={() => handleStressChange('mental', index)}
                                />
                                {index}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="edit-consecuences">
                    <h2>Consecuencias</h2>
                    {[{ value: 2, label: 'Leve' }, { value: 4, label: 'Moderada' }, { value: 6, label: 'Severa' }, { value: 8, label: 'Extrema' }].map((item, index) => (
                        <div className="data-consequences" key={index}>
                            <label htmlFor=""><span>{item.value}</span> {item.label}</label>
                            <div className="input-consequences">
                                <input
                                    type="text"
                                    value={editedSheet[`consequence_${index}`] || ""}
                                    onChange={(e) => handleChange(e, `consequence_${index}`)} />
                            </div>
                        </div>
                    ))}
                </div>
                {editedSheet.wand && (
                    <div className="sheet-data-wand">
                        <h2>Varita</h2>
                        <div className="edit-data-wand">
                            <label htmlFor="">Madera</label>
                            <select
                                value={selectedWood}
                                onChange={(e) => handleWandChange(e, 'wood.id')}
                            >
                                <option value="">Selecciona Madera</option>
                                {wandWoods.map(wood => (
                                    <option key={wood.id} value={wood.id}>{wood.name}</option>
                                ))}
                            </select>
                            <label htmlFor="">Núcleo</label>
                            <select
                                value={selectedCore}
                                onChange={(e) => handleWandChange(e, 'core.id')}
                            >
                                <option value="">Selecciona Núcleo</option>
                                {wandCores.map(core => (
                                    <option key={core.id} value={core.id}>{core.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <div className="sheet-data-aspectos">
                    <h2>Concepto</h2>
                    <div className="aspecto-box">
                        <input
                            type="text"
                            value={editedSheet.concepto || ""}
                            onChange={(e) => handleChange(e, 'concepto')}
                        />
                    </div>
                    <div>
                        <h2>Problema</h2>
                        <div className="aspecto-box">
                            <input
                                type="text"
                                value={editedSheet.problema || ""}
                                onChange={(e) => handleChange(e, 'problema')}
                            />
                        </div>
                    </div>
                    <div>
                        <h2>Aspectos</h2>
                        <div className="aspectos">
                            {[0, 1, 2, 3].map(index => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        value={editedSheet.aspectos[index] || ""}
                                        onChange={(e) => handleAspectosChange(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sheet-data-proezas">
                        <h2>Proezas</h2>
                        <div className="proezas">
                            {[0, 1, 2, 3].map(index => (
                                <div key={index}>
                                    <input
                                        type="text"
                                        value={editedSheet.proezas[index] || ""}
                                        onChange={(e) => handleProezasChange(e, index)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
