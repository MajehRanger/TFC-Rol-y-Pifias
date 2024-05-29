package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.proyecto.dto.PlayerDTO;
import com.proyecto.mapper.PlayerMapper;
import com.proyecto.model.Player;
import com.proyecto.repository.PlayerRepository;
import com.proyecto.service.PlayerService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class PlayerServiceImpl implements PlayerService {

    private final PlayerRepository playerRepository;

    private final PlayerMapper playerMapper;

    @Override
    public PlayerDTO getPlayerById(Long id) {
        Player player = playerRepository.findById(id).orElseThrow(() -> new RuntimeException("Player not found"));
        return playerMapper.mapToPlayerDTO(player);
    }

    @Override
    public List<PlayerDTO> getAllPlayers() {
        List<Player> players = playerRepository.findAll();
        return players.stream()
                      .map(playerMapper::mapToPlayerDTO)
                      .collect(Collectors.toList());
    }

    @Override
    public void createPlayer(PlayerDTO playerDTO) {
        Player player = playerMapper.mapToPlayer(playerDTO);
        player = playerRepository.save(player);
        playerMapper.mapToPlayerDTO(player);
    }

    @Override
    public void updatePlayer(Long id, PlayerDTO playerDTO) {
        Player existingPlayer = playerRepository.findById(id).orElseThrow(() -> new RuntimeException("Player not found"));
        Player updatedPlayer = playerMapper.mapToPlayer(playerDTO);
        updatedPlayer.setId(existingPlayer.getId());
        playerRepository.save(updatedPlayer);
    }

    @Override
    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }

}


