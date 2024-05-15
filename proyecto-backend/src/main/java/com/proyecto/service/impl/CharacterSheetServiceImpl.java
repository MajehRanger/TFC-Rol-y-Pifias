package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.exception.ResourceNotFoundException;
import com.proyecto.mapper.CharacterSheetMapper;
import com.proyecto.model.CharacterSheet;
import com.proyecto.repository.CharacterSheetRepository;
import com.proyecto.service.CharacterSheetService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CharacterSheetServiceImpl implements CharacterSheetService{

    private CharacterSheetRepository characterSheetRepository;

    @Override
    public CharacterSheetDTO createSheet(CharacterSheetDTO characterSheetDTO){
        CharacterSheet sheet = CharacterSheetMapper.mapToSheet(characterSheetDTO);
        CharacterSheet savedSheet = characterSheetRepository.save(sheet);
        return CharacterSheetMapper.mapToSheetDTO(savedSheet);
    }

    @Override
    public CharacterSheetDTO getSheetById(Long sheetId){
        CharacterSheet characterSheet = characterSheetRepository.findById(sheetId)
            .orElseThrow(() -> 
            new ResourceNotFoundException("No existe una ficha con el id: " + sheetId));

        return CharacterSheetMapper.mapToSheetDTO(characterSheet);
    }

    @Override
    public List<CharacterSheetDTO> getAllSheets(){
            List<CharacterSheet> characterSheets = characterSheetRepository.findAll();
        return characterSheets.stream().map((characterSheet) -> CharacterSheetMapper.mapToSheetDTO(characterSheet))
        .collect(Collectors.toList());
    }

    @Override
    public CharacterSheetDTO updateSheet(Long sheetId, CharacterSheetDTO updatedSheet){
        CharacterSheet characterSheet = characterSheetRepository.findById(sheetId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe una ficha con el id: " + sheetId));
        
        characterSheet.setCharacterName(updatedSheet.getCharacterName());
        characterSheet.setPd(updatedSheet.getPd());
        characterSheet.setPx(updatedSheet.getPx());
        characterSheet.setNotas(updatedSheet.getNotas());

        CharacterSheet characterSheetUpdatedObj = characterSheetRepository.save(characterSheet);

        return CharacterSheetMapper.mapToSheetDTO(characterSheetUpdatedObj);
    }

    public void deleteSheet(Long sheetId){
        characterSheetRepository.findById(sheetId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe una ficha con el id: " + sheetId));

        characterSheetRepository.deleteById(sheetId);
    }
}
