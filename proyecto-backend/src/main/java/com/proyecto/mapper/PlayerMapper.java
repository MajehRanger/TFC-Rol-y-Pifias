package com.proyecto.mapper;

import com.proyecto.dto.PlayerDTO;
import com.proyecto.model.Player;

public class PlayerMapper {
    public static PlayerDTO mapToUserDTO(Player user){
        return new PlayerDTO(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getPassword()
        );
    }

    public static Player mapToUser(PlayerDTO userDTO){
        return new Player(
            userDTO.getId(),
            userDTO.getName(),
            userDTO.getEmail(),
            userDTO.getPassword()
        );
    }
}
