import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../App";
import { useLocation } from "react-router-dom";
import SheetService from "../../../services/SheetService";
import { AspectosComponent } from "../aspectos/AspectosComponent";
import { ProezasComponent } from "../proezas/ProezasComponent";
import { WandComponent } from "../wands/WandComponent";

export const DataSheetComponent = () => {

    const [sheet, setSheet] = useState([]);
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
    }, []);

    return (
        <>
            <div className="sheet-data">
                <div>
                    <div className="sheet-data-stress">
                        <h2>Estrés</h2>
                        <div className="data-stress">
                            <label htmlFor="">Físico</label>
                            <input type="checkbox" onChange={() => handleCheckFhys(0)} />
                            <input type="checkbox" onChange={() => handleCheckFhys(1)} />
                            <input type="checkbox" onChange={() => handleCheckFhys(2)} />
                            <input type="checkbox" onChange={() => handleCheckFhys(3)} />
                        </div>
                        <div className="data-stress">
                            <label htmlFor="">Mental</label>
                            <input type="checkbox" onChange={() => handleCheckMen(0)} />
                            <input type="checkbox" onChange={() => handleCheckMen(1)} />
                            <input type="checkbox" onChange={() => handleCheckMen(2)} />
                            <input type="checkbox" onChange={() => handleCheckMen(3)} />
                        </div>
                    </div>
                    <div className="sheet-data-consecuences">
                        <h2>Consecuencias</h2>
                        <div className="data-consecuences">
                            <label htmlFor=""><span>2</span> Leve</label>
                            <input type="text" />
                        </div>
                        <div className="data-consecuences">
                            <label htmlFor=""><span>2</span> Leve</label>
                            <input type="text" />
                        </div>
                        <div className="data-consecuences">
                            <label htmlFor=""><span>4</span> Moderada</label>
                            <input type="text" />
                        </div>
                        <div className="data-consecuences">
                            <label htmlFor=""><span>6</span> Severa</label>
                            <input type="text" />
                        </div>
                        <div className="data-consecuences">
                            <label htmlFor=""><span>8</span> Extrema</label>
                            <input type="text" />
                        </div>
                    </div>
                    <WandComponent />
                </div>
                <div>
                    <AspectosComponent />
                    <ProezasComponent />

                </div>
            </div>
        </>
    )
}