package com.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.WandDTO;
import com.proyecto.service.WandService;

@CrossOrigin("*")
@RestController
@RequestMapping("/wands")
public class WandController {

    @Autowired
    private WandService wandService;

    @GetMapping("/get/{id}")
    public ResponseEntity<WandDTO> getCharacterSheetById(@PathVariable long id) {
        WandDTO wandDTO = wandService.getWandById(id);
        return ResponseEntity.ok(wandDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<WandDTO>> getAllCharacterSheets() {
        List<WandDTO> wandDTOs = wandService.getWands();
        return ResponseEntity.ok(wandDTOs);
    }

    @PostMapping("/add")
    public ResponseEntity<Void> createCharacterSheet(@RequestBody WandDTO wandDTO) {
        wandService.createWand(wandDTO);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Void> updatePlayer(@PathVariable long id, @RequestBody WandDTO wandDTO) {
        wandService.updateWand(id, wandDTO);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable long id) {
        wandService.deleteWand(id);
        return ResponseEntity.noContent().build();
    }
}
