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
    private Integer pd;
    private Integer px;
    private String description;
    private EstilosDTO estilos;
    private int player;
    private WandDTO wand;
    
}
