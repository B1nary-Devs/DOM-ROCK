package com.api.painelvendas.services;


import com.api.painelvendas.dtos.AdministradorPostRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.painelvendas.models.Administrador;
import com.api.painelvendas.repositories.AdministradorRepository;

import jakarta.transaction.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class AdministradorService {


	@Autowired
	AdministradorRepository administradorRepository;
	
	public AdministradorService(AdministradorRepository administradorRepository) {
		this.administradorRepository = administradorRepository;
	}
	@Transactional
	public Administrador save(AdministradorPostRequestDto administradorPostRequestDto) {
		Administrador administrador = Administrador.builder()
				.id(administradorPostRequestDto.getId())
				.email(administradorPostRequestDto.getEmail())
				.password(administradorPostRequestDto.getPassword())
				.nivelAcesso(administradorPostRequestDto.getNivelAcesso())
				.build();
		return administradorRepository.save(administrador);
	}


	public List<Administrador> findAll() {
		return administradorRepository.findAll();
	}

	public Optional<Administrador> findById(Integer id) {

		return administradorRepository.findById(id);
	}



	@Transactional
	public void delete(Administrador administrador) {
		administradorRepository.delete(administrador);
	}






	public Administrador login(String email, String password) {
		return administradorRepository.findByEmailAndPassword(email, password);
	}


	public boolean existsByEmailAdministrador(String email) {
		return administradorRepository.existsByEmail(email);
	}
}
