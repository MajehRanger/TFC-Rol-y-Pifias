package com.proyecto.service;

import com.proyecto.dto.EstilosDTO;
import java.util.List;

public interface EstilosService {
    EstilosDTO getEstilosById(long id);
    List<EstilosDTO> getAllEstilos();
    EstilosDTO createEstilos(EstilosDTO estilosDTO);
    EstilosDTO updateEstilos(long id, EstilosDTO estilosDTO);
    void deleteEstilos(long id);
}
