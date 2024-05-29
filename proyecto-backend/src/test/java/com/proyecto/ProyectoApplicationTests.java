package com.proyecto;

import com.proyecto.dto.EstilosDTO;
import com.proyecto.mapper.EstilosMapper;
import com.proyecto.model.Estilos;
import org.instancio.Instancio;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class ProyectoApplicationTests {

	@Autowired
	EstilosMapper mapper;

	@Test
	void contextLoads() {
		EstilosDTO source = Instancio.create(EstilosDTO.class);
		Estilos mapped = mapper.mapToEstilos(source);
		assertThat(mapped).usingRecursiveComparison().isEqualTo(source);
	}

}
