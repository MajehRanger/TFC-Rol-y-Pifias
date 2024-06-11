import { HeaderComponent } from "../common/header/HeaderComponent";
import { MenuSheets } from "./MenuSheets";
import "./ListSheet.css";

export const Sheets = () => {

    return (
        <>
            <HeaderComponent />
            <MenuSheets/>
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
                    <tbody >
                        <tr className="rowTable">
                            <td className="listItem listName"></td>
                            <td className="listItem listDesc"></td>
                            <td className="listButton">
                                <button>editar</button>
                            </td>
                            <td className="listButton">
                                <button>borrar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </>
    );
};