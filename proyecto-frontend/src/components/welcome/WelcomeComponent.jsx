import React from "react";
import { HeaderComponent } from "../common/HeaderComponent";
import { Link } from "react-router-dom";

export const WelcomeComponent = () => {

    return (
        <>
            <HeaderComponent />
            <div className="background">
                <div className="welcome-container">
                    <h1>Bienvenid@ a Rol y Pifias</h1>
                    <div className="welcome-info">
                        <h2>¿De qué trata esta página?</h2>
                        <p>Esta web ha sido desarrollada por Sergio Cabaleiro como proyecto final del ciclo de Desarrollo de Aplicaciones Web.</p>
                        <p> Pensada para complementar tu experiencia con Los secretos del Mundo Mágico, aquí podrás organizar y gestionar todas tus fichas de personajes de manera rápida y sencilla.</p>
                        <p>La plataforma ofrece una forma accesible y eficiente de llevar un registro de tus personajes, pociones, hechizos, objetos mágicos y mucho más. </p>
                    </div>
                    <div className="welcome-info">
                        <h2>¡Sumérgete en el fascinante universo de Los secretos del Mundo Mágico!</h2>
                        <p>Un juego de rol basado en el sistema FATE acelerado, con pinceladas del FATE core. Este galardonado juego, reconocido con el Premio Ignotus 2021 a Mejor Juego de Rol por la Asociación Española de Fantasía, Ciencia Ficción y Terror, te ofrece la oportunidad de explorar y vivir tus propias aventuras mágicas.</p>
                        <p>Podréis crear personajes tanto adultos como estudiantes, hacer pociones, hechizos, objetos mágicos, escoger vuestra varita o estudiar el herbolario. Además, el manual trae un extenso bestiario. Todo lo necesario para crear y jugar vuestras propias aventuras en el mundo de Harry Potter. </p>
                        <p>Recuerda que en la cabecera se puede acceder a todos los manuales e información necesaria para empezar a jugar.</p>
                    </div>
                    <div className="welcome-menu">
                        <Link className="welcome-link" to="/sheets"><button className="welcome-btn">Empieza a Jugar</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}