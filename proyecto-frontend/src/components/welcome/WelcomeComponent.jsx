import React from "react";
import { HeaderComponent } from "../common/HeaderComponent";
import { Link } from "react-router-dom";

export const WelcomeComponent = () => {

    return (
        <>
            <HeaderComponent />
            <div className="welcome-container">
                <h1>Bienvenid@ a Rol y Pifias</h1>
                <div className="welcome-info">
                    <h3>La idea</h3>
                    <p>Esta web esta pensada para organizar y usar tus fichas de "Los secretos del Mundo mágico". Creada como proyecto final del ciclo de Desarrollo de Aplicaciones Web por Sergio Cabaleiro.</p>
                    <p>A futuro me gustaria poder implementar dichas de otros juegos de rol.</p>
                </div>
                <div className="welcome-info">
                    <h3>Introducción al juego</h3>
                    <p>Los secretos del Mundo Mágico es un juego de rol, desarrollado por Laura Guerrero, con sistema FATE acelerado y con trazas de FATE core, para jugar en el mundo de Harry Potter.</p>
                    <p>Podréis crear personajes tanto adultos como estudiantes, hacer pociones, hechizos, objetos mágicos, escoger vuestra varita o estudiar el herbolario. Además, el manual trae un extenso bestiario. Todo lo necesario para crear y jugar vuestras propias aventuras en el mundo de Harry Potter. </p>
                    <p>En la cabecera se puede acceder a todos los manuales e información necesaria para empezar a jugar.</p>
                </div>
                <div className="welcome-menu">
                <Link className="welcome-link" to="/sheets"><button className="welcome-btn">Empieza a Jugar</button></Link>
                </div>
                
            </div>
        </>
    )
}