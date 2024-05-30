package com.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.WandWoodDTO;
import com.proyecto.service.WandWoodService;

@CrossOrigin("*")
@RestController
@RequestMapping("/wood")
public class WandWoodController {
    
    @Autowired
    private WandWoodService wandWoodService;

    @GetMapping("/get/{id}")
    public ResponseEntity<WandWoodDTO> getCharacterSheetById(@PathVariable long id) {
        WandWoodDTO wandWoodDTO = wandWoodService.getWoodById(id);
        return ResponseEntity.ok(wandWoodDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<WandWoodDTO>> getAllCharacterSheets() {
        List<WandWoodDTO> wandWoodDTOs = wandWoodService.getAllWoods();
        return ResponseEntity.ok(wandWoodDTOs);
    }
}
