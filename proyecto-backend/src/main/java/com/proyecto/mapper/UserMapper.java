package com.proyecto.mapper;

import com.proyecto.dto.UserDTO;
import com.proyecto.model.User;

public class UserMapper {
    public static UserDTO mapToUserDTO(User user){
        return new UserDTO(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getPassword()
        );
    }

    public static User mapToUser(UserDTO userDTO){
        return new User(
            userDTO.getId(),
            userDTO.getName(),
            userDTO.getEmail(),
            userDTO.getPassword()
        );
    }
}
