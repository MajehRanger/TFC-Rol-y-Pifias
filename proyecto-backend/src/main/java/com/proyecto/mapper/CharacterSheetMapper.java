package com.proyecto.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.model.CharacterSheet;

@Mapper(componentModel = "spring", uses = { EstilosMapper.class, PlayerMapper.class })
public interface CharacterSheetMapper {
    CharacterSheetMapper INSTANCE = Mappers.getMapper(CharacterSheetMapper.class);
    
    CharacterSheetDTO mapToSheetDTO(CharacterSheet sheet);

    CharacterSheet mapToSheet(CharacterSheetDTO sheetDTO);

    List<CharacterSheetDTO> mapToSheetDTOs(List<CharacterSheet> sheets);

    List<CharacterSheet> mapToSheets(List<CharacterSheetDTO> sheetDTOs);


}
