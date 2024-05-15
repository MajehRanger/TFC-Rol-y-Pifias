package com.proyecto.controller;

import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.PlayerDTO;
//import com.proyecto.model.Player;
//import com.proyecto.repository.PlayerRepository;
import com.proyecto.service.PlayerService;

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
@RequestMapping("/api/players")
public class PlayerController {
    
    private PlayerService playerService;
    //private PlayerRepository playerRepository;

    @PostMapping("/add")
    public ResponseEntity<PlayerDTO> createPlayer(@RequestBody PlayerDTO playerDTO){
        PlayerDTO savedPlayer = playerService.createUser(playerDTO);
        return new ResponseEntity<>(savedPlayer, HttpStatus.CREATED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<PlayerDTO> getPlayerById(@PathVariable("id") Long playerId){
        PlayerDTO playerDTO = playerService.getPlayerById(playerId);
        return ResponseEntity.ok(playerDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<PlayerDTO>> getAllPlayer() {
        List<PlayerDTO> players = playerService.getAllPlayers();
        return ResponseEntity.ok(players);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<PlayerDTO> updateUser(@PathVariable("id") Long playerId, @RequestBody PlayerDTO updatedPlayer) {
        PlayerDTO playerDTO = playerService.updatePlayer(playerId, updatedPlayer);
        
        return ResponseEntity.ok(playerDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Long playerId){
        playerService.deletePlayer(playerId);
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
