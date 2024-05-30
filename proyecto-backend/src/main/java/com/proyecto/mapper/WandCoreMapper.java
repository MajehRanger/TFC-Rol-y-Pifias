package com.proyecto.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.proyecto.dto.WandCoreDTO;
import com.proyecto.model.WandCore;

@Mapper(componentModel = "spring")
public interface WandCoreMapper {
    WandCoreDTO mapToDTO(WandCore wandCore);

    WandCore mapToEntity(WandCoreDTO wandCoreDTO);

    List<WandCoreDTO> mapToDTOs(List<WandCore> wandCores);

    List<WandCore> mapToEntities(List<WandCoreDTO> wandCoreDTOs);
}
