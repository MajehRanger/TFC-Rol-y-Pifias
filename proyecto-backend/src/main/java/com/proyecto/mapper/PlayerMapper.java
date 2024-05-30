package com.proyecto.mapper;

import java.util.List;
import org.mapstruct.Mapper;

import com.proyecto.dto.PlayerDTO;
import com.proyecto.model.Player;

@Mapper(componentModel = "spring", uses = {CharacterSheetMapper.class})
public interface PlayerMapper {

    PlayerDTO mapToDTO(Player player);

    Player mapToEntity(PlayerDTO playerDTO);

    List<PlayerDTO> mapToDTOs(List<Player> players);

    List<Player> mapToEntities(List<PlayerDTO> playerDTOs);

    // Mapeo OneToMany
   // List<CharacterSheetDTO> mapToCharacterSheetDTOs(List<CharacterSheet> characterSheets);
}
