package com.proyecto.controller;

import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.PlayerDTO;
import com.proyecto.service.PlayerService;

import lombok.AllArgsConstructor;

//import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/players")
public class PlayerController {
    
    private final PlayerService playerService;
    //private final UserDetailsServiceImpl userDetailsService;

    @GetMapping("/get/{id}")
    public ResponseEntity<PlayerDTO> getPlayerById(@PathVariable String id) {
        System.out.println(id);
        Long idLong = Long.parseLong(id);
        PlayerDTO playerDTO = playerService.getPlayerById(idLong);
        return ResponseEntity.ok(playerDTO);
    }
/*
    @GetMapping("/getall")
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        List<PlayerDTO> players = playerService.getAllPlayers();
        return ResponseEntity.ok(players);

    }

    @PostMapping("/add")
    public ResponseEntity<Void> createPlayer(@RequestBody PlayerDTO playerDTO) {
        playerService.createPlayer(playerDTO);
        return ResponseEntity.noContent().build();
    }
         @GetMapping("/adminuser/get-profile")
    public ResponseEntity<PlayerDTO> getMyProfile(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getEmail();
        PlayerDTO response = userDetailsService.loadUserByUsername(email);
        return  ResponseEntity.status(response.getStatusCode()).body(response);
    }*/
    

    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updatePlayer(@PathVariable long id, @RequestBody PlayerDTO playerDTO) {
        playerService.updatePlayer(id, playerDTO);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable long id) {
        playerService.deletePlayer(id);
        return ResponseEntity.noContent().build();
    }

}
