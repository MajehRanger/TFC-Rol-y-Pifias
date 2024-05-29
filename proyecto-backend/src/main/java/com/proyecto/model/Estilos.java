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

    private int adivinacion;
    private int alerta;
    private int armas;
    private int artesOscuras;
    private int carisma;
    private int criaturasMagicas;
    private int ciencias;
    private int conocimientosMuggle;
    private int contactos;
    private int deportesMagicos;
    private int empatia;
    private int hechizos;
    private int herbologia;
    private int historiaMagica;
    private int idiomas;
    private int investigar;
    private int pelea;
    private int pilotar;
    private int pociones;
    private int recursos;
    private int resistencia;
    private int sigilo;
    private int supervivencia;
    private int teoriaMagica;
    private int transfiguracion;
    private int voluntad;

}
