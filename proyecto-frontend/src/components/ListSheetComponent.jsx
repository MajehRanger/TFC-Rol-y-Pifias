import React, {useEffect, useState} from 'react'
import { listSheets } from '../services/CharacterSheetService'

function ListSheetComponent() {

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
  return (
    <div className='container m-5'>
        <h2>Lista de fichas</h2>
        <table className='table table-bordered'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Puntos Destino</th>
                <th>Puntos Experiencia</th>
                <th>Notas</th>
            </tr>
            </thead>
            <tbody>
            {
            sheets.map(sheet =>
                <tr key={sheet.id}>
                    <td>{sheet.id}</td>
                    <td>{sheet.characterName}</td>
                    <td>{sheet.pd}</td>
                    <td>{sheet.px}</td>
                    <td>{sheet.notes}</td>
                </tr>
            )}
            </tbody>
            
        </table>
    </div>
  )
}
export default ListSheetComponent