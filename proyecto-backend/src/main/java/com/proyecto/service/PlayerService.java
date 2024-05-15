package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.PlayerDTO;

public interface PlayerService {
    PlayerDTO createUser(PlayerDTO playerDTO);

    PlayerDTO getPlayerById(Long playerId);

    List<PlayerDTO> getAllPlayers();

    PlayerDTO updatePlayer(Long playerId, PlayerDTO updatedPlayer);
    
    void deletePlayer(Long userId);
}
