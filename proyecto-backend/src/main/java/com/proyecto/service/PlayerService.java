package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.PlayerDTO;

public interface PlayerService {

    PlayerDTO getPlayerById(long id);

    List<PlayerDTO> getAllPlayers();

    PlayerDTO createPlayer(PlayerDTO playerDTO);

    PlayerDTO updatePlayer(long id, PlayerDTO playerDTO);

    void deletePlayer(long id);
}
