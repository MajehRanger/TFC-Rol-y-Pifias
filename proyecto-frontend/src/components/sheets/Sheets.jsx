import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/header/HeaderComponent";
import { MenuSheets } from "./MenuSheets";
import SheetService from "../../services/SheetService"

import "./ListSheet.css";

export const Sheets = () => {

    const [sheets, setSheets] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        SheetService.allSheets(token)
            .then((response) => {
                setSheets(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <HeaderComponent />
            <MenuSheets />
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