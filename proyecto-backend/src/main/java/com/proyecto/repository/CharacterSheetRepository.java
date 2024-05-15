package com.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.model.CharacterSheet;

@Repository
public interface CharacterSheetRepository extends JpaRepository<CharacterSheet, Long>{
    
}
