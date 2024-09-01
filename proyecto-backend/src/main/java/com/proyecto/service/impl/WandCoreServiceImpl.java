package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.dto.WandCoreDTO;
import com.proyecto.mapper.WandCoreMapper;
import com.proyecto.model.WandCore;
import com.proyecto.repository.WandCoreRepository;
import com.proyecto.service.WandCoreService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class WandCoreServiceImpl implements WandCoreService {

    @Autowired
    private final WandCoreRepository wandCoreRepository;

    @Autowired
    private final WandCoreMapper wandCoreMapper;

    @Override
    public WandCoreDTO getCoreById(Long id) {
        WandCore wandCore = wandCoreRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character Sheet not found"));
        return wandCoreMapper.mapToDTO(wandCore);
    }

    @Override
    public List<WandCoreDTO> getAllCores() {
        List<WandCore> wandCores = wandCoreRepository.findAll();
        return wandCores.stream()
                .map(wandCoreMapper::mapToDTO)
                .collect(Collectors.toList());
    }

}
