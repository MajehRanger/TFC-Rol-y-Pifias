package com.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.SpellDTO;
import com.proyecto.service.SpellService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/spell")
public class SpellController {

    @Autowired
    private SpellService spellService;

     @GetMapping("/get/{id}")
    public ResponseEntity<SpellDTO> getCharacterSheetById(@PathVariable long id) {
        SpellDTO spellDTO = spellService.getSpellById(id);
        return ResponseEntity.ok(spellDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<SpellDTO>> getAllCharacterSheets() {
        List<SpellDTO> spellDTOs = spellService.getAllSpells();
        return ResponseEntity.ok(spellDTOs);
    }
    
}
