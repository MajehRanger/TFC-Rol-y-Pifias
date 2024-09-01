import React, { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import PlayerService from "../../services/PlayerService";
import { AuthContext } from "../../App";

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                navigate('/welcome')
            }

        } catch (error) {
            setError(error)
        }
    }

    return (
        <main className="login-main">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label htmlFor="">Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="login-form-group">
                        <label htmlFor="">Contraseña:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="login-form-btns">
                        <div><button type="submit" className="login-form-btn">Entrar</button></div>
                        <Link to="/register" className="login-form-link"><button className="login-form-btn">Regístrate</button></Link>

                    </div>

                </form>
            </div>
        </main>
    )

}

