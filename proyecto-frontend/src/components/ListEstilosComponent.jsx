import React, {useEffect, useState} from 'react'
import { listSheets } from '../services/CharacterSheetService'


function ListEstilosComponent() {

    const data = [
        {
            "id": 1,
            "adivinación": 1,
            "alerta": 2,
            "armas": 1,
            "artesOscuras": 3,
            "carisma": 2,
            "criaturasMagicas": 3,
            "ciencias": 1,
            "conocimientosMuggle": 2,
            "contactos": 1,
            "deportesMagicos": 3,
            "empatia": 2,
            "hechizos": 3,
            "herbologia": 1,
            "historiaMagica": 2,
            "idiomas": 1,
            "investigar": 3,
            "pelea": 2,
            "pilotar": 3,
            "pociones": 1,
            "recursos": 2,
            "resistencia": 1,
            "sigilo": 3,
            "supervivencia": 2,
            "teoriaMagica": 3,
            "transfiguracion": 5,
            "voluntad": 3
        }
    ];
    
  return (
    <div className='container m-3'>
        <h2>Estilos</h2>
        
            {
            data.map(estilo =>
                <div key={estilo.id}>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Adivinación:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.adivinación}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Alerta:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.alerta}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Armas:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.armas}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Artes Oscuras:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.artesOscuras}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Carisma:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.carisma}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Criaturas Mágicas:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.criaturasMagicas}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Ciencias:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.ciencias}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Conocimeintos Muggle:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.conocimientosMuggle}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Contactos:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.contactos}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Deportes Mágicos:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.deportesMagicos}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Empatía:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.empatia}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Hechizos:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.hechizos}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Herbología:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.adivinación}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Historia Mágica:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.historiaMagica}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Idiomas:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.idiomas}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Investigar:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.investigar}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Pelea:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.pelea}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Pilotar:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.pilotar}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Pociones:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.pociones}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Recursos:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.recursos}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Resistencia:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.resistencia}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Sigilo:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.sigilo}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Supervivencia:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.empatia}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Teoria Mágica:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.hechizos}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>➧Transfiguración:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.hechizos}/>
                    </div>
                    <div className='estiloBox'>
                        <div className='estiloName'>Voluntad:</div>
                        <input className='estiloPoints' type="text" readonly value={estilo.hechizos}/>
                    </div>
                </div>
            )}

    </div>
  )
}
export default ListEstilosComponent