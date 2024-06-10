import React, { useState, useEffect } from 'react';
import PlayerService from '../../services/PlayerService';
import { Link } from 'react-router-dom';



export const  ProfilePage = () => {
    const [playerInfo, setPlayerInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try {

            const token = localStorage.getItem('token'); // Coge el token de localStorage
            const response = await PlayerService.getYourProfile(token);
            setPlayerInfo(response.players);
        } catch (error) {
            console.error('Error recopilando la información de usuario:', error);
        }
    };

    return (
        <div className="profile-page-container">
            <h2>Profile Information</h2>
            <p>Name: {playerInfo.name}</p>
            <p>Email: {playerInfo.email}</p>
            <button><Link to={`/update/${playerInfo.id}`}>Update This Profile</Link></button>
        </div>
    );
}
