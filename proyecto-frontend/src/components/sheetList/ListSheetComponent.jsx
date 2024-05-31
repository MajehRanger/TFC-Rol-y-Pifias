import React, { useEffect, useState } from "react";
import { listSheets } from "../../services/ListSheet";
import "./ListSheetComponent.css";

export const ListSheetComponent = () => {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    listSheets()
      .then((response) => {
        setSheets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="body">
        <h2>Lista de Fichas</h2>

        <table>
          <thead>
            <tr>
              <th className="listItem listName">Nombre</th>
              <th className="listItem listDesc">Breve descripción</th>
              <th className="listButton"></th>
              <th className="listButton"></th>
            </tr>
          </thead>
          {sheets && // Condicional para renderizar solo si sheets no es null
            sheets.map((sheet) => (
              <tbody key={sheet.id}>
                <tr className="rowTable">
                  <td className="listItem listName">{sheet.characterName}</td>
                  <td className="listItem listDesc">{sheet.description}</td>
                  <td className="listButton">
                    <button>editar</button>
                  </td>
                  <td className="listButton">
                    <button>borrar</button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </>
  );
};
