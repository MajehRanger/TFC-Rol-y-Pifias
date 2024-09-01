package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.mapper.CharacterSheetMapper;
import com.proyecto.model.CharacterSheet;
import com.proyecto.repository.CharacterSheetRepository;
import com.proyecto.service.CharacterSheetService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CharacterSheetServiceImpl implements CharacterSheetService {

    @Autowired
    private CharacterSheetRepository characterSheetRepository;

    @Autowired
    private CharacterSheetMapper characterSheetMapper;

    @Override
    public CharacterSheetDTO getCharacterSheetById(Long id) {
        CharacterSheet sheet = characterSheetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character Sheet not found"));
        return characterSheetMapper.mapToSheetDTO(sheet);
    }

    @Override
    public List<CharacterSheetDTO> getAllCharacterSheets() {
        List<CharacterSheet> sheets = characterSheetRepository.findAll();
        return sheets.stream()
                .map(characterSheetMapper::mapToSheetDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void createCharacterSheet(CharacterSheetDTO sheetDTO) {
        CharacterSheet sheet = characterSheetMapper.mapToSheet(sheetDTO);
        characterSheetRepository.save(sheet);
    }

    @Override
    public void updateCharacterSheet(Long id, CharacterSheetDTO sheetDTO) {
        CharacterSheet existingSheet = characterSheetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Character Sheet not found"));
        CharacterSheet updatedSheet = characterSheetMapper.mapToSheet(sheetDTO);
        updatedSheet.setId(existingSheet.getId());
        characterSheetRepository.save(updatedSheet);
    }

    @Override
    public void deleteCharacterSheet(Long id) {
        characterSheetRepository.deleteById(id);
    }

}
