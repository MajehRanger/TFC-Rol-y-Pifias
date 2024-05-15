package com.proyecto.service.impl;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.proyecto.dto.UserDTO;
import com.proyecto.exception.ResourceNotFoundException;
import com.proyecto.mapper.UserMapper;
import com.proyecto.model.User;
import com.proyecto.repository.UserRepository;
import com.proyecto.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        User user = UserMapper.mapToUser(userDTO);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDTO(savedUser);
    }

    @Override
    public UserDTO getUserById(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> 
                new ResourceNotFoundException("No existe un usuario con la id: " + userId));

        return UserMapper.mapToUserDTO(user);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map((user) -> UserMapper.mapToUserDTO(user))
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO updateUser(Long userId, UserDTO updatedUser) {
        User user = userRepository.findById(userId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe un usuario con la id: " + userId));
        
        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());

        User userUpdatedObj = userRepository.save(user);

        return UserMapper.mapToUserDTO(userUpdatedObj);
    }

    @Override
    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> 
        new ResourceNotFoundException("No existe un usuario con la id: " + userId));

        userRepository.deleteById(userId);
    }

    

}
