import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../App";
import { HeaderComponent } from "../common/HeaderComponent";
import PlayerService from "../../services/PlayerService";

export const ProfileComponent = () => {

    const [player, setProfile] = useState([]);
    const { token } = useContext(AuthContext);
/*
    useEffect(() => {
        PlayerService.getPlayerById(player.id, token)
            .then((response) => {
                setProfile(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

*/
    return (
        <>
            <HeaderComponent />
        
                    <div className="welcome-container">
                        <h1>Perfil</h1>
                        <div className="welcome-info">
                            <h3>Nombre</h3>
                            <div></div>
                        </div>
                        <div className="welcome-info">
                            <h3>Email</h3>
                            <div></div>
                        </div>
                        <div className="welcome-info">
                            <h3>Nº fichas</h3>
                            <div></div>
                        </div>

                    </div>
        </>
    )
}