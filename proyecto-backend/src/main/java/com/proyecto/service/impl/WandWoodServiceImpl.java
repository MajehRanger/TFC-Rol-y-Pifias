package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.dto.WandWoodDTO;
import com.proyecto.mapper.WandWoodMapper;
import com.proyecto.model.WandWood;
import com.proyecto.repository.WandWoodRepository;
import com.proyecto.service.WandWoodService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WandWoodServiceImpl implements WandWoodService{
    @Autowired
    private final WandWoodRepository wandWoodRepository;

    @Autowired
    private final WandWoodMapper wandWoodMapper;
    
    @Override
    public WandWoodDTO getWoodById(Long id) {
        WandWood wandWood = wandWoodRepository.findById(id).orElseThrow(() -> new RuntimeException("Character Sheet not found"));
        return wandWoodMapper.mapToDTO(wandWood);
    }

    @Override
    public List<WandWoodDTO> getAllWoods() {
        List<WandWood> wandWoods = wandWoodRepository.findAll();
        return wandWoods.stream()
                     .map(wandWoodMapper::mapToDTO)
                     .collect(Collectors.toList());
    }
    
}
