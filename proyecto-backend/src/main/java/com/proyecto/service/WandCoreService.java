package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.WandCoreDTO;

public interface WandCoreService {
    WandCoreDTO getCoreById(Long id);

    List<WandCoreDTO> getAllCores();

}
