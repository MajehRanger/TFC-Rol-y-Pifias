package com.proyecto.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import com.proyecto.dto.EstilosDTO;
import com.proyecto.mapper.EstilosMapper;
import com.proyecto.model.Estilos;
import com.proyecto.repository.EstilosRepository;
import com.proyecto.service.EstilosService;

@Service
@AllArgsConstructor
public class EstilosServiceImpl implements EstilosService {

    private final EstilosRepository estilosRepository;

    private final EstilosMapper estilosMapper;

    @Override
    public EstilosDTO getEstilosById(long id) {
        Estilos estilos = estilosRepository.findById(id).orElseThrow(() -> new RuntimeException("Estilos not found"));
        return estilosMapper.mapToEstilosDTO(estilos);
    }

    @Override
    public List<EstilosDTO> getAllEstilos() {
        List<Estilos> estilosList = estilosRepository.findAll();
        return estilosList.stream()
                          .map(estilosMapper::mapToEstilosDTO)
                          .collect(Collectors.toList());
    }

    @Override
    public EstilosDTO createEstilos(EstilosDTO estilosDTO) {
        Estilos estilos = estilosMapper.mapToEstilos(estilosDTO);
        estilos = estilosRepository.save(estilos);
        return estilosMapper.mapToEstilosDTO(estilos);
    }

    @Override
    public EstilosDTO updateEstilos(long id, EstilosDTO estilosDTO) {
        Estilos existingEstilos = estilosRepository.findById(id).orElseThrow(() -> new RuntimeException("Estilos not found"));
        Estilos updatedEstilos = estilosMapper.mapToEstilos(estilosDTO);
        updatedEstilos.setId(existingEstilos.getId());
        updatedEstilos = estilosRepository.save(updatedEstilos);
        return estilosMapper.mapToEstilosDTO(updatedEstilos);
    }

    @Override
    public void deleteEstilos(long id) {
        estilosRepository.deleteById(id);
    }
}