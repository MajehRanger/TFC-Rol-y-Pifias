package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.dto.WandDTO;
import com.proyecto.mapper.WandMapper;
import com.proyecto.model.Wand;
import com.proyecto.repository.WandRepository;
import com.proyecto.service.WandService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WandServiceImpl implements WandService{

    @Autowired
    private final WandRepository wandRepository;

    @Autowired
    private final WandMapper wandMapper;

    @Override
    public WandDTO getWandById(Long id) {
        Wand wand = wandRepository.findById(id).orElseThrow(() -> new RuntimeException("Character Sheet not found"));
        return wandMapper.mapToDTO(wand);
    }

    @Override
    public List<WandDTO> getWands() {
        List<Wand> wands = wandRepository.findAll();
        return wands.stream()
                     .map(wandMapper::mapToDTO)
                     .collect(Collectors.toList());
    }

    @Override
    public void createWand(WandDTO wandDTO) {
        Wand wand = wandMapper.mapToEntity(wandDTO);
        wand = wandRepository.save(wand);
    }

    @Override
    public void updateWand(Long id, WandDTO wandDTO) {
        Wand existingWand = wandRepository.findById(id).orElseThrow(() -> new RuntimeException("Estilos not found"));
        Wand updatedWand = wandMapper.mapToEntity(wandDTO);
        updatedWand.setId(existingWand.getId());
        wandRepository.save(updatedWand);
    }

    @Override
    public void deleteWand(Long id) {
        wandRepository.deleteById(id);
    }
    
}
