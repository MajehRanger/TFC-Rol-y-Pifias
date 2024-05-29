package com.proyecto.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.dto.EstilosDTO;
import com.proyecto.service.EstilosService;

import lombok.AllArgsConstructor;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/estilos")
public class EstilosController {

    private final EstilosService estilosService;

    @GetMapping("/get/{id}")
    public ResponseEntity<EstilosDTO> getEstilosById(@PathVariable long id) {
        EstilosDTO estilosDTO = estilosService.getEstilosById(id);
        return ResponseEntity.ok(estilosDTO);
    }

    @GetMapping("/getall")
    public ResponseEntity<List<EstilosDTO>> getAllEstilos() {
        List<EstilosDTO> estilosList = estilosService.getAllEstilos();
        return ResponseEntity.ok(estilosList);
    }

    @PostMapping("/add")
    public ResponseEntity<EstilosDTO> createEstilos(@RequestBody EstilosDTO estilosDTO) {
        EstilosDTO createdEstilos = estilosService.createEstilos(estilosDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEstilos);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<EstilosDTO> updateEstilos(@PathVariable long id, @RequestBody EstilosDTO estilosDTO) {
        EstilosDTO updatedEstilos = estilosService.updateEstilos(id, estilosDTO);
        return ResponseEntity.ok(updatedEstilos);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEstilos(@PathVariable long id) {
        estilosService.deleteEstilos(id);
        return ResponseEntity.noContent().build();
    }
}