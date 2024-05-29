package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.CharacterSheetDTO;

public interface CharacterSheetService {
    CharacterSheetDTO getCharacterSheetById(long id);

    List<CharacterSheetDTO> getAllCharacterSheets();

    CharacterSheetDTO createCharacterSheet(CharacterSheetDTO sheetDTO);

    CharacterSheetDTO updateCharacterSheet(long id, CharacterSheetDTO sheetDTO);

    void deleteCharacterSheet(long id);
}
