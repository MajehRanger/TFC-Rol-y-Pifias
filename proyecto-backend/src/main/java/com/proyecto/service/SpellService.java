package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.SpellDTO;

public interface SpellService {
    SpellDTO getSpellById(Long id);

    List<SpellDTO> getAllSpells();
}
