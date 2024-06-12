package com.proyecto.dto;


import java.util.List;

import com.proyecto.model.Spell;

import jakarta.persistence.Column;
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
    private List<Spell> spells;
    private String concepto;
    private String problema;
    private List<String> aspectos;
    private List<String> proezas;
    private List<String> notes;
    private List<String> inventory;
    private Integer physicalStress;
    private Integer mentalStress;
    private List<String> consequences;
    
}
