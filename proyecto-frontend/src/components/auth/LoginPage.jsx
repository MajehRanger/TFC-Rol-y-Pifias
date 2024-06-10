import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import PlayerService from "../../services/PlayerService";

function LoginPage(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const playerData = await PlayerService.login(email, password);
            if(playerData.token) {
                //coge el token de la respuesta y lo guarda en local
                localStorage.setItem('token', userData); // o userData.token si la respuesta envia mas cosas
                //me mueve a otra pagina
                navigate('/profile')
            }else{
                setError(playerData.error);
            }
            
        } catch (error) {
            console.log(error);
            setError(error)
            //Unos segundos para volver a intentarlo
            setTimeout(() =>{
                    setError('');
            }, 5000);
        }
    }

    return(
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
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

export default LoginPage;