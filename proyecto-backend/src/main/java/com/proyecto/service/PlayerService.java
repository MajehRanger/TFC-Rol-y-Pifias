package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.PlayerDTO;

public interface PlayerService {

    PlayerDTO getPlayerById(Long id);

    List<PlayerDTO> getAllPlayers();

    void createPlayer(PlayerDTO playerDTO);

    void updatePlayer(Long id, PlayerDTO playerDTO);

    void deletePlayer(Long id);
}
