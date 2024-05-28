import React, {useEffect, useState} from 'react'
import { listSheets } from '../services/CharacterSheetService'
import ListEstilosComponent from './ListEstilosComponent'
import ListAspectosComponent from './ListAspectosComponent'

function ListSheetComponent() {

   const [sheets, setSheets] = useState([])

   useEffect(() => {
    listSheets().then((response) =>{
        setSheets(response.data);
    }).catch(error => {
        console.error(error);
    })
   }, [])
    
  return (
    <>
    <div className='container sheetBox m-3'>
    <h2>Datos de personaje</h2>
            {
                sheets && ( // Condicional para renderizar solo si sheets no es null
                <div className="p-2" key={sheets.id}>
                    <div>Nombre: {sheets.characterName}</div>
                    <div>Puntos Destino: {sheets.pd}</div>
                    <div>Puntos Experiencia: {sheets.px}</div>
                    <div>Notas: {sheets.notes}</div>
                </div>
                )
            }
    </div>
    <div className='container m-3'>
    <h2>Imagen del personaje</h2>
    <img className="ms-2" src="https://cdn-icons-png.flaticon.com/512/4270/4270729.png" alt="" />
    </div>
    
    <ListEstilosComponent />
    <ListAspectosComponent />
    
    </>
  )
}
export default ListSheetComponent