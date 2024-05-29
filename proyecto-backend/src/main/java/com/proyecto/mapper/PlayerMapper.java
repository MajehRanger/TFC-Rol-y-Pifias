package com.proyecto.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.dto.PlayerDTO;
import com.proyecto.model.CharacterSheet;
import com.proyecto.model.Player;

@Mapper(componentModel = "spring")
public interface PlayerMapper {
    PlayerMapper INSTANCE = Mappers.getMapper(PlayerMapper.class);

    PlayerDTO mapToPlayerDTO(Player player);

    Player mapToPlayer(PlayerDTO playerDTO);

    List<PlayerDTO> mapToPlayerDTOs(List<Player> players);

    List<Player> mapToPlayers(List<PlayerDTO> playerDTOs);

    // Mapeo OneToMany
    List<CharacterSheetDTO> mapToCharacterSheetDTOs(List<CharacterSheet> characterSheets);
}
