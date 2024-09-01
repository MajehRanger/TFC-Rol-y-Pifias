import React, { useState, useEffect, useContext, useCallback } from "react";
import { AuthContext } from "../../../App";
import SheetService from "../../../services/SheetService";

export const EditDataSheetComponent = ({ sheet, onChange }) => {
    const [editedSheet, setEditedSheet] = useState({
      aspectos: ["", "", "", ""],
      proezas: ["", "", "", ""],
      wand: { core: {}, wood: {} },
      concepto: "",
      problema: "",
      consequence_2: "",
      consequence_4: "",
      consequence_6: "",
      consequence_8: "",
      physicalStress: 0,
      mentalStress: 0,
    });
    const [wandCores, setWandCores] = useState([]);
    const [wandWoods, setWandWoods] = useState([]);
    const { token } = useContext(AuthContext);
  
    // Fetch wand cores and woods on mount
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [cores, woods] = await Promise.all([
            SheetService.getAllWandCores(token),
            SheetService.getAllWandWoods(token),
          ]);
          setWandCores(cores || []);
          setWandWoods(woods || []);
        } catch (error) {
          console.error("Error fetching wand data:", error);
        }
      };
  
      fetchData();
    }, [token]);
  
    // Initialize editedSheet with sheet data on mount
    useEffect(() => {
      if (sheet) {
        setEditedSheet({
          aspectos: Array.isArray(sheet.aspectos) ? [...sheet.aspectos] : ["", "", "", ""],
          proezas: Array.isArray(sheet.proezas) ? [...sheet.proezas] : ["", "", "", ""],
          wand: {
            core: sheet.wand?.core || {},
            wood: sheet.wand?.wood || {},
          },
          concepto: sheet.concepto || "",
          problema: sheet.problema || "",
          consequence_2: sheet.consequence_2 || "",
          consequence_4: sheet.consequence_4 || "",
          consequence_6: sheet.consequence_6 || "",
          consequence_8: sheet.consequence_8 || "",
          physicalStress: sheet.physicalStress || 0,
          mentalStress: sheet.mentalStress || 0,
        });
      }
    }, [sheet]);
  
    // Handle general input changes
    const handleChange = useCallback((e, field) => {
      const { value } = e.target;
      setEditedSheet(prevSheet => ({
        ...prevSheet,
        [field]: value,
      }));
      if (onChange) onChange(field, value);
    }, [onChange]);
  
    // Handle wand changes
    const handleWandChange = useCallback((e, type) => {
      const { value } = e.target;
      setEditedSheet(prevSheet => ({
        ...prevSheet,
        wand: {
          ...prevSheet.wand,
          [type]: { id: value },
        },
      }));
      if (onChange) onChange(`wand.${type}.id`, value);
    }, [onChange]);
  
    // Handle aspectos changes
    const handleAspectosChange = useCallback((e, index) => {
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
    }, [onChange]);
  
    // Handle proezas changes
    const handleProezasChange = useCallback((e, index) => {
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
    }, [onChange]);
  
    // Handle stress changes
    const handleStressChange = useCallback((type, value) => {
      setEditedSheet(prevSheet => ({
        ...prevSheet,
        [`${type}Stress`]: value,
      }));
      if (onChange) onChange(`${type}Stress`, value);
    }, [onChange]);
  
  return (
    <div className="sheet-data">
      {/* Stress management section */}
      <div>
        <div className="sheet-data-stress">
          <h2>Estrés</h2>
          <div className="data-stress">
            <label>Físico</label>
            {[0, 1, 2, 3].map((index) => (
              <label key={`phys-${index}`}>
                <input
                  type="radio"
                  name="physicalStress"
                  value={index}
                  checked={editedSheet.physicalStress === index}
                  onChange={() => handleStressChange("physical", index)}
                />
                {index}
              </label>
            ))}
          </div>
          <div className="data-stress">
            <label>Mental</label>
            {[0, 1, 2, 3].map((index) => (
              <label key={`men-${index}`}>
                <input
                  type="radio"
                  name="mentalStress"
                  value={index}
                  checked={editedSheet.mentalStress === index}
                  onChange={() => handleStressChange("mental", index)}
                />
                {index}
              </label>
            ))}
          </div>
        </div>

        {/* Consequences section */}
        <div className="edit-consecuences">
          <h2>Consecuencias</h2>
          {[
            { value: 2, label: "Leve" },
            { value: 4, label: "Moderada" },
            { value: 6, label: "Severa" },
            { value: 8, label: "Extrema" },
          ].map((item) => (
            <div className="data-consequences" key={item.value}>
              <label>
                <span>{item.value}</span> {item.label}
              </label>
              <div className="input-consequences">
                <input
                  type="text"
                  value={editedSheet[`consequence_${item.value}`] || ""}
                  onChange={(e) => handleChange(e, `consequence_${item.value}`)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Wand section */}
        {editedSheet.wand && (
          <div className="sheet-data-wand">
            <h2>Varita</h2>
            <div className="edit-data-wand">
              <label>Madera</label>
              <select
                value={editedSheet.wand.wood.id || ""}
                onChange={(e) => handleWandChange(e, "wood")}
              >
                <option value="">Selecciona Madera</option>
                {wandWoods.map((wood) => (
                  <option key={wood.id} value={wood.id}>
                    {wood.name}
                  </option>
                ))}
              </select>
              <label>Núcleo</label>
              <select
                value={editedSheet.wand.core.id || ""}
                onChange={(e) => handleWandChange(e, "core")}
              >
                <option value="">Selecciona Núcleo</option>
                {wandCores.map((core) => (
                  <option key={core.id} value={core.id}>
                    {core.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Concept and Problem section */}
      <div>
        <div className="sheet-data-aspectos">
          <h2>Concepto</h2>
          <div className="aspecto-box">
            <textarea
              value={editedSheet.concepto || ""}
              onChange={(e) => handleChange(e, "concepto")}/>
          </div>
          <div>
            <h2>Problema</h2>
            <div className="aspecto-box">
              <textarea
                value={editedSheet.problema || ""}
                onChange={(e) => handleChange(e, "problema")}/>
            </div>
          </div>

          {/* Aspectos section */}
          <div>
            <h2>Aspectos</h2>
            <div className="aspectos">
              {[0, 1, 2, 3].map((index) => (
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

          {/* Proezas section */}
          <div className="edit-data-proezas">
            <h2>Proezas</h2>
            <div className="proezas">
              {[0, 1, 2, 3].map((index) => (
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
