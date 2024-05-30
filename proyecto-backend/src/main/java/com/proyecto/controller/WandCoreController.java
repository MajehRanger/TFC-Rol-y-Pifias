package com.proyecto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.WandCoreDTO;
import com.proyecto.service.WandCoreService;

@CrossOrigin("*")
@RestController
@RequestMapping("/core")
public class WandCoreController {

    @Autowired
    private WandCoreService wandCoreService;

    @GetMapping("/get/{id}")
    public ResponseEntity<WandCoreDTO> getCharacterSheetById(@PathVariable long id) {
        WandCoreDTO wandCoreDTO = wandCoreService.getCoreById(id);
        return ResponseEntity.ok(wandCoreDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<WandCoreDTO>> getAllCharacterSheets() {
        List<WandCoreDTO> wandCoreDTOs = wandCoreService.getAllCores();
        return ResponseEntity.ok(wandCoreDTOs);
    }
}
