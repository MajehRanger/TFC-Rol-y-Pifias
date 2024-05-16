package com.proyecto.mapper;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.model.CharacterSheet;

public class CharacterSheetMapper {
    public static CharacterSheetDTO mapToSheetDTO(CharacterSheet sheet){
        return new CharacterSheetDTO(
            sheet.getId(),
            sheet.getCharacterName(),
            sheet.getPd(),
            sheet.getPx(),
            sheet.getNotes()
        );
    }
public static CharacterSheet mapToSheet(CharacterSheetDTO sheetDTO) {
        return new CharacterSheet(
            sheetDTO.getId(),
            sheetDTO.getCharacterName(),
            sheetDTO.getPd(),
            sheetDTO.getPx(),
            sheetDTO.getNotes()
        );
    }
}
