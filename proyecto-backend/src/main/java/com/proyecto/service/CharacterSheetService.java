package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.CharacterSheetDTO;

public interface CharacterSheetService {
    CharacterSheetDTO createSheet(CharacterSheetDTO characterSheetDTO);

    CharacterSheetDTO getSheetById(Long sheetId);

    List<CharacterSheetDTO> getAllSheets();

    CharacterSheetDTO updateSheet(Long sheetId, CharacterSheetDTO characterSheetDTO);

    void deleteSheet(Long sheetId);
}
