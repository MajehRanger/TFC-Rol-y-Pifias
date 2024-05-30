package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.WandDTO;

public interface WandService {
    WandDTO getWandById(Long id);

    List<WandDTO> getWands();

    void createWand(WandDTO wandDTO);

    void updateWand(Long id, WandDTO wandDTO);

    void deleteWand(Long id);
}
