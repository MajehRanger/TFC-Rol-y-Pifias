package com.proyecto.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CharacterSheetDTO {
    private Long id;
    private String characterName;
    private int pd;
    private int px;
    private String description;
    private EstilosDTO estilos;
    private PlayerDTO player;
}
