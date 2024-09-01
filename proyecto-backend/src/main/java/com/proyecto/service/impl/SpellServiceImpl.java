package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.dto.SpellDTO;
import com.proyecto.mapper.SpellMapper;
import com.proyecto.model.Spell;
import com.proyecto.repository.SpellRepository;
import com.proyecto.service.SpellService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SpellServiceImpl implements SpellService {

    @Autowired
    private final SpellRepository spellRepository;

    @Autowired
    private final SpellMapper spellMapper;

    @Override
    public SpellDTO getSpellById(Long id) {
        Spell spell = spellRepository.findById(id).orElseThrow(() -> new RuntimeException("Character Sheet not found"));
        return spellMapper.mapToDTO(spell);
    }

    @Override
    public List<SpellDTO> getAllSpells() {
        List<Spell> spells = spellRepository.findAll();
        return spells.stream()
                .map(spellMapper::mapToDTO)
                .collect(Collectors.toList());
    }

}
