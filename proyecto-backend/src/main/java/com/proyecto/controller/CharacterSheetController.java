package com.proyecto.controller;

import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.CharacterSheetDTO;
import com.proyecto.service.CharacterSheetService;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
@AllArgsConstructor
@RestController
@RequestMapping("/sheets")
public class CharacterSheetController {
    
    private CharacterSheetService characterSheetService;

    @PostMapping("/add")
    public ResponseEntity<CharacterSheetDTO> createSheet(@RequestBody CharacterSheetDTO sheetDTO) {
        CharacterSheetDTO savedSheet = characterSheetService.createSheet(sheetDTO);
        return new ResponseEntity<>(savedSheet, HttpStatus.CREATED);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<CharacterSheetDTO> getSheetById(@PathVariable("id") Long sheetId){
        CharacterSheetDTO sheetDTO = characterSheetService.getSheetById(sheetId);
        return ResponseEntity.ok(sheetDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<CharacterSheetDTO>> getAllSheets(){
        List<CharacterSheetDTO> sheetsDTO = characterSheetService.getAllSheets();
        return ResponseEntity.ok(sheetsDTO);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<CharacterSheetDTO> updateSheet(@PathVariable("id") Long sheetId, @RequestBody CharacterSheetDTO updatedSheet){
        CharacterSheetDTO sheetDTO = characterSheetService.updateSheet(sheetId, updatedSheet);
        return ResponseEntity.ok(sheetDTO);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSheet(@PathVariable("id") Long sheetId){
        characterSheetService.deleteSheet(sheetId);
        return ResponseEntity.ok("Ficha eliminada.");
    }
}
