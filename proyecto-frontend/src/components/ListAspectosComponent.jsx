import React, {useEffect, useState} from 'react'
import { listSheets } from '../services/CharacterSheetService'

function ListAspectosComponent() {

    const data = [
        {
            "id": 1,
            "concepto": "Druida aventajado.",
            "problema1": "No puede comunicarse en forma de oso.",
            "problema2": "Aprovecha cualquier excusa para transformarse.",
        }
    ];
    
  return (
    <>
    <div className='container aspectos m-3'>
        <h2>Aspectos</h2>
            {
            data.map(aspecto =>
                <div key={aspecto.id}>
                    <div className='aspectoBox p-2'>
                        <h4>Concepto</h4>
                        <div className='conceptoText p-1'>{aspecto.concepto}</div>
                    </div>
                    <div className='aspectoBox  p-2'>
                        <h4>Problema</h4>
                        <div className='problemaText  p-1'>{aspecto.problema1}</div>
                        <div className='problemaText  p-1'>{aspecto.problema2}</div>
                    </div>
                </div>
            )}
    </div>
    </>
  )
}
export default ListAspectosComponent