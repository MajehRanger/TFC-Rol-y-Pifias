package com.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.proyecto.model.Spell;

public interface SpellRepository extends JpaRepository<Spell, Long> {

}
