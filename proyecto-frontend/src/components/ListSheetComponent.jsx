import React, {useEffect, useState} from 'react'
//import { listSheets } from '../services/CharacterSheetService'
import ListEstilosComponent from './ListEstilosComponent'
import ListAspectosComponent from './ListAspectosComponent'

function ListSheetComponent() {
/*
   const [sheets, setSheets] = useState([])

   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await listSheets();
            console.log('API Response:', response.data);
            if (Array.isArray(response.data)) {
                setSheets(response.data);
            }
        } catch (error) {
            console.error('Error fetching sheets:', error);
        }
    };
    fetch('/api/players/getall')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));
    fetchData();
    },[])
    console.log(typeof sheets);
    */

    const data = [
        {
            "id": 1,
            "characterName": "Pepe el Druida",
            "pd": 12,
            "px": 4,
            "notes": "Es un druida y le gusta ser un oso."
        }
    ];
    
  return (
    <>
    <div className='container sheetBox m-3'>
    <h2>Datos de personaje</h2>
            {
            data.map(sheet =>
                <div key={sheet.id}>
                    <div>Nombre: {sheet.characterName}</div>
                    <div>Puntos Destino: {sheet.pd}</div>
                    <div>Puntos Experiencia: {sheet.px}</div>
                    <div>Notas: {sheet.notes}</div>
                </div>
            )}
    </div>
    <div className='container m-3'>
    <h2>Imagen del personaje</h2>
    <img className="m-3" src="https://i.pinimg.com/236x/99/34/c0/9934c067155a39a076963df5c7cc8259.jpg" alt="" />
    </div>
    
    <ListEstilosComponent />
    <ListAspectosComponent />
    
    </>
  )
}
export default ListSheetComponent