package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.WandWoodDTO;

public interface WandWoodService {
    WandWoodDTO getWoodById(Long id);

    List<WandWoodDTO> getAllWoods();
}
