package com.proyecto.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "characterSheets")
public class CharacterSheet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "player_id", nullable = false)
    @ToString.Exclude
    @JsonBackReference
    private Player player;

    @Column(name = "character_name")
    private String characterName;
    @Column(name = "destiny_points")
    private Integer pd;
    @Column(name = "experience_points")
    private Integer px;
    @Column(name = "character_desc")
    private String description;
    
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "estilos_id", referencedColumnName = "id")
    private Estilos estilos;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "wand_id", referencedColumnName = "id")
    private Wand wand;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "character_spells_list",
        joinColumns = @JoinColumn(name = "charactersheet_id"),
        inverseJoinColumns = @JoinColumn(name = "spell_id")
    )
    @Column(name = "character_spells")
    private List<Spell> spells;

    @Column(name = "character_concepto")
    private String concepto;

    @Column(name = "character_problema")
    private String problema;

    @Column(name = "character_aspectos")
    private List<String> aspectos;

    @Column(name = "character_proezas")
    private List<String> proezas;
 
    @Column(name = "character_notes")
    private List<String> notes;

    @Column(name = "character_inventory")
    private List<String> inventory;

    @Column(name = "character_phyStress")
    private Integer physicalStress;

    @Column(name = "character_menStress")
    private Integer mentalStress;

    @Column(name = "character_consequences")
    private List<String> consequences;

}
