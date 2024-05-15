package com.proyecto.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_email", nullable = false, unique = true )
    private String email;

    @Column(name = "user_password", nullable = false)
    private String password;
}
