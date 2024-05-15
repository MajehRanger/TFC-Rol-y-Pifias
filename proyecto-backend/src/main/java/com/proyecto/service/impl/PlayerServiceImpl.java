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

    private PlayerRepository playerRepository;

    @Override
    public PlayerDTO createUser(PlayerDTO userDTO) {
        Player player = PlayerMapper.mapToUser(userDTO);
        Player savedPlayer = playerRepository.save(player);
        return PlayerMapper.mapToUserDTO(savedPlayer);
    }

    @Override
    public PlayerDTO getPlayerById(Long playerId) {
        Player player = playerRepository.findById(playerId)
                .orElseThrow(() -> 
                new ResourceNotFoundException("No existe un usuario con la id: " + playerId));

        return PlayerMapper.mapToUserDTO(player);
    }

    @Override
    public List<PlayerDTO> getAllPlayers() {
        List<Player> players = playerRepository.findAll();
        return players.stream().map((player) -> PlayerMapper.mapToUserDTO(player))
                .collect(Collectors.toList());
    }

    @Override
    public PlayerDTO updatePlayer(Long playerId, PlayerDTO updatedPlayer) {
        Player player = playerRepository.findById(playerId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe un usuario con la id: " + playerId));
        
        player.setName(updatedPlayer.getName());
        player.setEmail(updatedPlayer.getEmail());

        Player playerUpdatedObj = playerRepository.save(player);

        return PlayerMapper.mapToUserDTO(playerUpdatedObj);
    }

    @Override
    public void deletePlayer(Long playerId) {
        playerRepository.findById(playerId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe un usuario con la id: " + playerId));

        playerRepository.deleteById(playerId);
    }

    

}
