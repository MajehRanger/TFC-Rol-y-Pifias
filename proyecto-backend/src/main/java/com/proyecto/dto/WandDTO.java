package com.proyecto.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class WandDTO {
    private Long id;

    private WandWoodDTO wood;

    private WandCoreDTO core;
}
