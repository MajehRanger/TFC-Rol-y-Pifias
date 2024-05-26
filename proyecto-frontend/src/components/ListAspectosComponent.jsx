import React, {useEffect, useState} from 'react'
import { listSheets } from '../services/CharacterSheetService'

function ListAspectosComponent() {

    const data = [
        {
            "id": 1,
            "concepto": "Druida aventajado",
            "problema1": "No habla como un oso",
            "problema2": "Aprovecha cualquier excusa para transformarse",
        }
    ];
    
  return (
    <>
    <div className='container aspectos m-3'>
        <h2>Aspectos</h2>
            {
            data.map(aspecto =>
                <div key={aspecto.id}>
                    <div className='aspectoBox'>
                        <h3>Concepto</h3>
                        <div className='conceptoText'>{aspecto.concepto}</div>
                    </div>
                    <div className='aspectoBox'>
                        <h3>Problema</h3>
                        <div className='problemaText'>{aspecto.problema1}</div>
                        <div className='problemaText'>{aspecto.problema2}</div>
                    </div>
                </div>
            )}
    </div>
    </>
  )
}
export default ListAspectosComponent