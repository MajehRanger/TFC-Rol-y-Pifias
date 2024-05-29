package com.proyecto.controller;

import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.service.CharacterSheetService;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
@RequestMapping("/sheets")
public class CharacterSheetController {
    
    @Autowired
    private CharacterSheetService characterSheetService;

    @PostMapping("/add")
    public ResponseEntity<CharacterSheetDTO> createCharacterSheet(@RequestBody CharacterSheetDTO sheetDTO) {
        CharacterSheetDTO createdSheet = characterSheetService.createCharacterSheet(sheetDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSheet);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<CharacterSheetDTO> getCharacterSheetById(@PathVariable long id) {
        CharacterSheetDTO sheetDTO = characterSheetService.getCharacterSheetById(id);
        return ResponseEntity.ok(sheetDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<CharacterSheetDTO>> getAllCharacterSheets() {
        List<CharacterSheetDTO> sheets = characterSheetService.getAllCharacterSheets();
        return ResponseEntity.ok(sheets);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<CharacterSheetDTO> updateCharacterSheet(@PathVariable long id, @RequestBody CharacterSheetDTO sheetDTO) {
        CharacterSheetDTO updatedSheet = characterSheetService.updateCharacterSheet(id, sheetDTO);
        return ResponseEntity.ok(updatedSheet);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCharacterSheet(@PathVariable long id) {
        characterSheetService.deleteCharacterSheet(id);
        return ResponseEntity.noContent().build();
    }
}
