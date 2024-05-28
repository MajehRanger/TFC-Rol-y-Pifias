import React, {useEffect, useState} from 'react'
import {listSheets} from "../../services/ListSheet";
import "./ListSheetComponent.css";

export const ListSheetComponent= () => {

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
    <div className='body'>
    <h2>Lista de Fichas</h2>
            
                <table>
                  <thead>
                    <tr>
                      <th className='listItem'>Nombre</th>
                      <th className='listItem'>Notas</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                {
                  sheets && ( // Condicional para renderizar solo si sheets no es null
                sheets.map(sheet =>
                  <tbody  key={sheet.id}>
                    <tr>
                      <td className='listItem'>{sheet.characterName}</td>
                      <td className='listItem'>{sheet.notes}</td>
                      <td className='listButton'><button>editar</button></td>
                      <td className='listButton'><button>borrar</button></td>
                    </tr>
                  </tbody>
                  ))}
                  </table>
    </div>
    </>
  )
}
