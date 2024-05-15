package com.proyecto.controller;

import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.UserDTO;
import com.proyecto.model.User;
import com.proyecto.repository.UserRepository;
import com.proyecto.service.UserService;

import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;


@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    private UserService userService;
    private UserRepository userRepository;

    @PostMapping("/add")
    public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO){
        UserDTO savedUser = userService.createUser(userDTO);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable("id") Long userId){
        UserDTO userDTO = userService.getUserById(userId);
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable("id") Long userId, @RequestBody UserDTO updatedUser) {
        UserDTO userDTO = userService.updateUser(userId, updatedUser);
        
        return ResponseEntity.ok(userDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return ResponseEntity.ok("Usuario eliminado.");
    }
/* 
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        // Verifica las credenciales (aquí puedes implementar una lógica más sofisticada)
        User existingUser = userRepository.findBy(user.getEmail());
        if (existingUser != null && existingUser.getContraseña().equals(user.getContraseña())) {
            return "Login exitoso para " + existingUser.getNombre();
        } else {
            return "Credenciales inválidas";
        }
    }*/
}
