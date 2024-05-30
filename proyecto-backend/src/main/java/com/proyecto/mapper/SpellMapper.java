package com.proyecto.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.proyecto.dto.SpellDTO;
import com.proyecto.model.Spell;

@Mapper(componentModel = "spring")
public interface SpellMapper {

    SpellDTO mapToDTO(Spell spell);

    Spell mapToEntity(SpellDTO spellDTO);

    List<SpellDTO> mapToDTOs(List<Spell> estilos);

    List<Spell> mapToEntities(List<SpellDTO> estilosDTOs);
    
}
