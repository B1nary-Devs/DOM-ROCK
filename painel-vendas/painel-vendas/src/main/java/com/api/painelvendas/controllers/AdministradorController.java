package com.api.painelvendas.controllers;

import java.util.List;
import java.util.Optional;

import com.api.painelvendas.dtos.AdministradorPostRequestDto;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.painelvendas.models.Administrador;
import com.api.painelvendas.services.AdministradorService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/administrador")
public class AdministradorController {

	final AdministradorService administradorService;

	public AdministradorController(AdministradorService administradorService) {
		this.administradorService = administradorService;
	}

	@PostMapping
	public ResponseEntity<Object> saveAdiministrador(@RequestBody @Valid AdministradorPostRequestDto administradorPostRequestDto) {
		if (administradorService.existsByEmailAdministrador(administradorPostRequestDto.getEmail())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: Email informado ja em uso!");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(administradorService.save(administradorPostRequestDto));
		}

	@GetMapping
	public ResponseEntity<List<Administrador>> getAllAdministrador(){
		return ResponseEntity.status(HttpStatus.OK).body(administradorService.findAll());
	}

	@GetMapping("/{id}")
	public  ResponseEntity<Object> getOneAdministrador(@PathVariable(value = "id") Integer id){
		Optional<Administrador> administradorModelOptional = administradorService.findById(id);
		if(!administradorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Administrador não encontrado!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(administradorModelOptional.get());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteAdministrador(@PathVariable(value = "id")Integer id){
		Optional<Administrador> admnistradorModelOptional = administradorService.findById(id);
		if (!admnistradorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Administrador não encontrado!");
		}
		administradorService.delete(admnistradorModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("Administrador deletado com sucesso!");
	}


	@PutMapping("/{id}")
	public ResponseEntity<Object> updateAdministrador(@PathVariable(value = "id") Integer id,
													@RequestBody @Valid AdministradorPostRequestDto administradorPostRequestDto){
		Optional<Administrador> administradorModelOptional = administradorService.findById(id);
		if (!administradorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Administrador não encontrado!");
		}
		administradorPostRequestDto.setId(id);
		return ResponseEntity.status(HttpStatus.OK).body(administradorService.save(administradorPostRequestDto));
	}

	}
