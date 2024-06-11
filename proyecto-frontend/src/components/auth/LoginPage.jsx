import React, { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import PlayerService from "../../services/PlayerService";
import { AuthContext } from "../../App";
import "./login.css"

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await PlayerService.login(email, password);
            if (token) {
                //coge el token de la respuesta y lo guarda
                login(token);
                //me mueve a otra pagina
                navigate('/sheets')
            }

        } catch (error) {
            setError(error)
            //Unos segundos para volver a intentarlo
            setTimeout(() => {
                setError('');
            }, 5000);
        }
    }

    return (
        <main>
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
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-btns">
                        <button type="submit" className="form-btn">Entrar</button>
                        <Link to="/register" className="link-btn"><button className="form-btn">Regístrate</button></Link>
                    </div>

                </form>
            </div>
        </main>
    )

}

