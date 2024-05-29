package com.proyecto.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlayerDTO {
    private long id;
    private String name;
    private String email;
    private String password;
    private List<CharacterSheetDTO> characterSheets;
}
