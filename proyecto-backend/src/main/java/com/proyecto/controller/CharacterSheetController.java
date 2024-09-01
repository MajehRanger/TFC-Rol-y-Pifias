package com.proyecto.controller;

import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.mapper.CharacterSheetMapper;
import com.proyecto.model.CharacterSheet;
import com.proyecto.model.Player;
import com.proyecto.service.CharacterSheetService;
import com.proyecto.util.SecurityUtil;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/sheets")
public class CharacterSheetController {

    private final CharacterSheetService characterSheetService;
    private final CharacterSheetMapper characterSheetMapper;

    @PostMapping("/add")
    public ResponseEntity<Void> createCharacterSheet(@RequestBody CharacterSheetDTO sheetDTO) {
        characterSheetService.createCharacterSheet(sheetDTO);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<CharacterSheetDTO> getCharacterSheetById(@PathVariable long id) {
        CharacterSheetDTO sheetDTO = characterSheetService.getCharacterSheetById(id);
        return ResponseEntity.ok(sheetDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<CharacterSheetDTO>> getAllCharacterSheets() {
        Player player = SecurityUtil.getCurrentPlayer();

        List<CharacterSheet> playerSheets = player.getCharacterSheets();
        List<CharacterSheetDTO> sheets = characterSheetMapper.mapToSheetDTOs(playerSheets);
        System.out.println("funciona?" + sheets);
        return ResponseEntity.ok(sheets);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updateCharacterSheet(@PathVariable long id, @RequestBody CharacterSheetDTO sheetDTO) {
        characterSheetService.updateCharacterSheet(id, sheetDTO);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCharacterSheet(@PathVariable long id) {
        characterSheetService.deleteCharacterSheet(id);
        return ResponseEntity.noContent().build();
    }
}
