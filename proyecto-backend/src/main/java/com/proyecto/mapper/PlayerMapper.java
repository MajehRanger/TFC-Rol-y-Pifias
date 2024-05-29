package com.proyecto.mapper;

import java.util.List;
import org.mapstruct.Mapper;

import com.proyecto.dto.PlayerDTO;
import com.proyecto.model.Player;

@Mapper(componentModel = "spring", uses = {CharacterSheetMapper.class})
public interface PlayerMapper {

    PlayerDTO mapToPlayerDTO(Player player);

    Player mapToPlayer(PlayerDTO playerDTO);

    List<PlayerDTO> mapToPlayerDTOs(List<Player> players);

    List<Player> mapToPlayers(List<PlayerDTO> playerDTOs);

    // Mapeo OneToMany
   // List<CharacterSheetDTO> mapToCharacterSheetDTOs(List<CharacterSheet> characterSheets);
}
