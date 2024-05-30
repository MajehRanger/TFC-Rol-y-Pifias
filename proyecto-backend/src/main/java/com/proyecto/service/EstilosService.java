package com.proyecto.service;

import com.proyecto.dto.EstilosDTO;

import java.util.List;

public interface EstilosService {
    EstilosDTO getEstilosById(long id);
    List<EstilosDTO> getAllEstilos();
    void createEstilos(EstilosDTO estilosDTO);
    void updateEstilos(long id, EstilosDTO estilosDTO);
    void deleteEstilos(long id);
}
