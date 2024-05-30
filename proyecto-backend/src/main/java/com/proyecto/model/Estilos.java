package com.proyecto.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Estilos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer adivinacion;
    private Integer alerta;
    private Integer armas;
    private Integer artesOscuras;
    private Integer carisma;
    private Integer criaturasMagicas;
    private Integer ciencias;
    private Integer conocimientosMuggle;
    private Integer contactos;
    private Integer deportesMagicos;
    private Integer empatia;
    private Integer hechizos;
    private Integer herbologia;
    private Integer historiaMagica;
    private Integer idiomas;
    private Integer investigar;
    private Integer pelea;
    private Integer pilotar;
    private Integer pociones;
    private Integer recursos;
    private Integer resistencia;
    private Integer sigilo;
    private Integer supervivencia;
    private Integer teoriaMagica;
    private Integer transfiguracion;
    private Integer voluntad;

}
