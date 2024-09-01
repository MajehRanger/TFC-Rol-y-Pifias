package com.proyecto.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/proyecto")
@AllArgsConstructor
public class WelcomeController {

    @PostMapping("/inicio")
    public String welcome(@RequestBody String entity) {

        return entity;
    }

}
