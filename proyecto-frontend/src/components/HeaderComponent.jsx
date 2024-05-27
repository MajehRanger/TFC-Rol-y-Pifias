import React from 'react'

export const HeaderComponent = () => {
  return (
    <header className=' bg-secondary-subtle pt-3 pb-3'>
        <div className='container row'>
        <img className='col-2 d-inline m-2' src="src\assets\img\logo.png" alt="" />
        <h1 className='col-6 d-inline lh-lg fw-bold fs-1'>Rol y Pifias</h1>
        </div>
        
        <nav className='container nav nav-pills nav-justified justify-content-center'>
            <a className="btn btn-light col-2 m-2 fs-3" href="http://localhost:9000">Ficha</a>
            <a className="btn btn-light col-2 m-2 fs-3" href="http://localhost:9000">Otro Botón</a>
            <a className="btn btn-light col-2 m-2 fs-3" href="http://localhost:9000">Otro Botón</a>
            <a className="btn btn-light col-2 m-2 fs-3" href="https://lauraguerrero.itch.io/secretos-del-mundo-magico">Manuales</a>
        </nav>
    </header>
  )
}
