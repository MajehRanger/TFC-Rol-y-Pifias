package com.proyecto.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.proyecto.dto.WandWoodDTO;
import com.proyecto.model.WandWood;

@Mapper(componentModel = "spring")
public interface WandWoodMapper {
    
    WandWoodDTO mapToDTO(WandWood wandWood);

    WandWood mapToEntity(WandWoodDTO wandWoodDTO);

    List<WandWoodDTO> mapToDTOs(List<WandWood> wandWoods);

    List<WandWood> mapToEntities(List<WandWoodDTO> wandWoodDTOs);
}
