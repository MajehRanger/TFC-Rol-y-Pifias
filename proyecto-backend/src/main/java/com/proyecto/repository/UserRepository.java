package com.proyecto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
    
}
