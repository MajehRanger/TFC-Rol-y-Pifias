package com.proyecto.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Spell {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "spell_name")
    private String name;

    @Column(name = "spell_difficulty")
    private String difficulty;

    @Column(name = "spell_effect")
    private String effect;

    @Column(name = "spell_notes")
    private String notes;

    @Column(name = "spell_variable")
    private Boolean variable;
}
