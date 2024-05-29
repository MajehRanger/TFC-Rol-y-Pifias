package com.proyecto.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.proyecto.dto.EstilosDTO;
import com.proyecto.model.Estilos;

@Mapper(componentModel = "spring")
public interface EstilosMapper {
    EstilosMapper INSTANCE = Mappers.getMapper(EstilosMapper.class);

        EstilosDTO mapToEstilosDTO(Estilos estilos);

        Estilos mapToEstilos(EstilosDTO estilosDTO);

        List<EstilosDTO> mapToEstilosDTOs(List<Estilos> estilos);

        List<Estilos> mapToEstiloss(List<EstilosDTO> estilosDTOs);
}
