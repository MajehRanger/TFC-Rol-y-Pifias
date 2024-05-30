import React, { useEffect, useState } from "react";
import { listEstilos } from "../../services/ListEstilos";
import "./SheetEstilosComponent.css";

export const SheetEstilosComponent = () => {
    const [estilo, setEstilos] = useState([]);

    useEffect(() => {
        listEstilos()
            .then((response) => {
                setEstilos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="body">
            <h2>Estilos</h2>
            {
                <div key={estilo.id}>
                    <div className="estiloBox">
                        <div className="interiorBox">
                            <div className="estiloName">➧Adivinación:</div>
                            <input
                                className="estiloPoints"
                                type="text"
                                readOnly
                                value={estilo.adivinacion}
                            />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                        <div className="interiorBox">
                            <div className="estiloName">Alerta:</div>
                            <input
                                className="estiloPoints"
                                type="text"
                                readOnly
                                value={estilo.alerta}
                            />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                        <div className="interiorBox">
                            <div className="estiloName">Armas:</div>
                            <input
                                className="estiloPoints"
                                type="text"
                                readOnly
                                value={estilo.armas}
                            />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Artes Oscuras:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.artesOscuras}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Carisma:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.carisma}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Criaturas Mágicas:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.criaturasMagicas}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Ciencias:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.ciencias}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Conocimeintos Muggle:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.conocimientosMuggle}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Contactos:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.contactos}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Deportes Mágicos:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.deportesMagicos}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Empatía:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.empatia}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Hechizos:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.hechizos}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Herbología:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.herbologia}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Historia Mágica:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.historiaMagica}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Idiomas:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.idiomas}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Investigar:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.investigar}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Pelea:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.pelea}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Pilotar:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.pilotar}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Pociones:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.pociones}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Recursos:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.recursos}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Resistencia:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.resistencia}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Sigilo:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.sigilo}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Supervivencia:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.empatia}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Teoria Mágica:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.teoriaMagica}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">➧Transfiguración:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.transfiguracion}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                    <div className="estiloBox">
                    <div className="interiorBox">
                        <div className="estiloName">Voluntad:</div>
                        <input
                            className="estiloPoints"
                            type="text"
                            readOnly
                            value={estilo.voluntad}
                        />
                        </div>
                        <button className="estiloBtn">Tirar</button>
                    </div>
                </div>
            }
        </div>
    );
};
