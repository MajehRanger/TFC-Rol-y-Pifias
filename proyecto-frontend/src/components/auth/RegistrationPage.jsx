import React, { useState } from 'react';
import PlayerService from '../../services/PlayerService';
import { useNavigate, Link } from 'react-router-dom';

export const RegistrationPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Llama al metodo de PlayerService
            const token = localStorage.getItem('token');
            await PlayerService.register(formData, token);

            // Despues de registrarse limpia los campos
            setFormData({
                name: '',
                email: '',
                password: ''
            });
            alert('Usuario registrado con éxito');
            navigate('/');

        } catch (error) {
            console.error('Ocurrio un error al registrarse:', error);
            alert('Ocurrio un error al registrarse');
        }
    };

    return (
        <main className="login-main">
            <div className="login-container">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="login-form-group">
                        <label>Nombre:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="login-form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="login-form-group">
                        <label>Contraseña:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                    </div>

                    <div className="login-form-btns">
                        <div><button type="submit" className="login-form-btn">Regístrate</button></div>
                        <Link to="/" className="login-form-link"><button className="login-form-btn">Inicia sesión</button></Link>
                    </div>
                </form>
            </div>
        </main>
    );
}
