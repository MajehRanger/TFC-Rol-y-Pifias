package com.Auth;

import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {

    @PostMapping("/login")
    public String login() {
        
        return "Login";
    }
    
    @PostMapping("/register")
    public String register() {
        
        return "registro";
    }
    
}
