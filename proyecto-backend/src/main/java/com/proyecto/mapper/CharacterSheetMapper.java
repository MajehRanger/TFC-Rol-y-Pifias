package com.proyecto.mapper;

import java.util.List;

import com.proyecto.model.Player;
import com.proyecto.repository.PlayerRepository;
import com.proyecto.util.ApplicationContextProvider;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.model.CharacterSheet;

@Mapper(componentModel = "spring", uses = { EstilosMapper.class, SpellMapper.class})
public interface CharacterSheetMapper {

    @Mapping(target="player", expression = "java(Long.valueOf(sheet.getPlayer().getId()).intValue())")
    CharacterSheetDTO mapToSheetDTO(CharacterSheet sheet);

    @Mapping(target="player", qualifiedByName = "ToPlayerEntity")
    CharacterSheet mapToSheet(CharacterSheetDTO sheetDTO);

    @Named("ToPlayerEntity")
    default Player mapToEntity(int playerId) {
        return ApplicationContextProvider.getBean(PlayerRepository.class).findById(Integer.valueOf(playerId).longValue()).orElse(null);
    }

    List<CharacterSheetDTO> mapToSheetDTOs(List<CharacterSheet> sheets);

    List<CharacterSheet> mapToSheets(List<CharacterSheetDTO> sheetDTOs);


}
