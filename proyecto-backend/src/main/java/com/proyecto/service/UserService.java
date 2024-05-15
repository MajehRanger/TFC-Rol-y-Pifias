package com.proyecto.service;

import java.util.List;

import com.proyecto.dto.UserDTO;

public interface UserService {
    UserDTO createUser(UserDTO userDTO);

    UserDTO getUserById(Long userId);

    List<UserDTO> getAllUsers();

    UserDTO updateUser(Long userId, UserDTO updatedUser);
    
    void deleteUser(Long userId);
}
