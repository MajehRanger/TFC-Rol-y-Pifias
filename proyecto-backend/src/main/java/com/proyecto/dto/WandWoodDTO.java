package com.proyecto.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class WandWoodDTO {
     private Long id;

    private String name;

    private String description;
    
    private String bonus;

    private String notes;
}
