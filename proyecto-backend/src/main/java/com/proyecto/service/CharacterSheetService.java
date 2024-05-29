package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.CharacterSheetDTO;

public interface CharacterSheetService {
    CharacterSheetDTO getCharacterSheetById(Long id);

    List<CharacterSheetDTO> getAllCharacterSheets();

    void createCharacterSheet(CharacterSheetDTO sheetDTO);

    void updateCharacterSheet(Long id, CharacterSheetDTO sheetDTO);

    void deleteCharacterSheet(Long id);
}
