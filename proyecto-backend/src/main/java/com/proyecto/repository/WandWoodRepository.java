package com.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.model.WandWood;

@Repository
public interface WandWoodRepository extends JpaRepository<WandWood, Long>{


}
