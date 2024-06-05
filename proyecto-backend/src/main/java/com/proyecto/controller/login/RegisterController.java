package com.proyecto.controller.login;

import com.proyecto.dto.RegisterDTO;
//import com.proyecto.mapper.PlayerMapper;
import com.proyecto.model.Player;
import com.proyecto.repository.PlayerRepository;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/register")
public class RegisterController {

    //private final PlayerMapper playerMapper;
    private final PasswordEncoder passwordEncoder;
    private final PlayerRepository playerRepository;


    @PostMapping({"", "/"})
    public ResponseEntity<String> register(@RequestBody @Valid RegisterDTO registerDTO, BindingResult bindingResult){

        if(bindingResult.hasErrors()){
            List<String> errors = bindingResult.getFieldErrors().stream().map(e -> e.getField() + ": " + e.getDefaultMessage()).toList();
            System.out.println(errors);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error");
        }

        try{


            Player player = new Player();
            player.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
            player.setName(registerDTO.getName());
            player.setEmail(registerDTO.getEmail());
            player.setCharacterSheets(new ArrayList<>());
            playerRepository.save(player);

            // convertir el dto en un Player


            return ResponseEntity.ok("OK saver");
        }catch (AuthenticationException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
