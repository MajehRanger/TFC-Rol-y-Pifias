import React, {useContext, useState} from "react";
import {useNavigate} from 'react-router-dom';
import PlayerService from "../../services/PlayerService";
import { AuthContext } from "../../App";

export const  LoginPage = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    const[exito, setExito] = useState('');
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await PlayerService.login(email, password);
            if(token) {
                //coge el token de la respuesta y lo guarda en local
                login(token);
                //me mueve a otra pagina
                navigate('/sheets')
            }else{
                setError(playerData.error);
            }
            
        } catch (error) {
            setError(error)
            //Unos segundos para volver a intentarlo
            setTimeout(() =>{
                    setError('');
            }, 5000);
        }
    }

    return(
        <div className="login-container col-4 m-2">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            {exito && <p className="exito-message">{exito}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    )

}

