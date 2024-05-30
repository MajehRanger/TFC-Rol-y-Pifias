package com.proyecto.mapper;

import java.util.List;
import org.mapstruct.Mapper;

import com.proyecto.dto.EstilosDTO;
import com.proyecto.model.Estilos;

@Mapper(componentModel = "spring")
public interface EstilosMapper {

        EstilosDTO mapToDTO(Estilos estilos);

        Estilos mapToEntity(EstilosDTO estilosDTO);

        List<EstilosDTO> mapToDTOs(List<Estilos> estilos);

        List<Estilos> mapToEntities(List<EstilosDTO> estilosDTOs);
}
