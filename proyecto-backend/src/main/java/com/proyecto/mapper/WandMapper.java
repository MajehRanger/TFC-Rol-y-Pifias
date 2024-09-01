package com.proyecto.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.proyecto.dto.WandDTO;
import com.proyecto.model.Wand;

@Mapper(componentModel = "spring", uses = { WandCoreMapper.class, WandWoodMapper.class })
public interface WandMapper {
    WandDTO mapToDTO(Wand wand);

    Wand mapToEntity(WandDTO wandDTO);

    List<WandDTO> mapToDTOs(List<Wand> wands);

    List<Wand> mapToEntities(List<WandDTO> wandDTOs);
}
