package com.proyecto.service.impl;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.proyecto.dto.PlayerDTO;
import com.proyecto.exception.ResourceNotFoundException;
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
    public PlayerDTO getPlayerById(long id) {
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
    public PlayerDTO createPlayer(PlayerDTO playerDTO) {
        Player player = playerMapper.mapToPlayer(playerDTO);
        player = playerRepository.save(player);
        return playerMapper.mapToPlayerDTO(player);
    }

    @Override
    public PlayerDTO updatePlayer(long id, PlayerDTO playerDTO) {
        Player existingPlayer = playerRepository.findById(id).orElseThrow(() -> new RuntimeException("Player not found"));
        Player updatedPlayer = playerMapper.mapToPlayer(playerDTO);
        updatedPlayer.setId(existingPlayer.getId());
        updatedPlayer = playerRepository.save(updatedPlayer);
        return playerMapper.mapToPlayerDTO(updatedPlayer);
    }

    @Override
    public void deletePlayer(long id) {
        playerRepository.deleteById(id);
    }

/* 
    @Override
    public PlayerDTO createPlayer(PlayerDTO userDTO) {
        Player player = PlayerMapper.mapToPlayer(userDTO);
        Player savedPlayer = playerRepository.save(player);
        return PlayerMapper.mapToPlayerDTO(savedPlayer);
    }

    @Override
    public PlayerDTO getPlayerById(Long playerId) {
        Player player = playerRepository.findById(playerId)
                .orElseThrow(() -> 
                new ResourceNotFoundException("No existe un usuario con la id: " + playerId));

        return PlayerMapper.mapToPlayerDTO(player);
    }

    @Override
    public List<PlayerDTO> getAllPlayers() {
        List<Player> players = playerRepository.findAll();
        return players.stream().map((player) -> PlayerMapper.mapToPlayerDTO(player))
                .collect(Collectors.toList());
    }

    @Override
    public PlayerDTO updatePlayer(Long playerId, PlayerDTO updatedPlayer) {
        Player player = playerRepository.findById(playerId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe un usuario con la id: " + playerId));
        
        player.setName(updatedPlayer.getName());
        player.setEmail(updatedPlayer.getEmail());

        Player playerUpdatedObj = playerRepository.save(player);

        return PlayerMapper.mapToPlayerDTO(playerUpdatedObj);
    }

    @Override
    public void deletePlayer(Long playerId) {
        playerRepository.findById(playerId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe un usuario con la id: " + playerId));

        playerRepository.deleteById(playerId);
    }
*/
    

}
