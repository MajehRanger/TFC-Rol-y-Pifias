import React from 'react'

function ListUserComponent() {

    const data = [
        {
            "id": 1,
            "name": "Pepe",
            "email": "pepe@correo.com",
            "password": "abc123."
        },
        {
            "id": 2,
            "name": "Paloma",
            "email": "paloma@correo.com",
            "password": "abc123."
        },
        {
            "id": 3,
            "name": "Sergio",
            "email": "sergio@correo.com",
            "password": "abc123."
        }
    ];
  return (
    <div className='container m-5'>
        <h2>Lista de usuarios</h2>
        <table className='table table-bordered'>
            <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
            </tr>
            </thead>
            <tbody>
            {data.map(user =>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default ListUserComponent