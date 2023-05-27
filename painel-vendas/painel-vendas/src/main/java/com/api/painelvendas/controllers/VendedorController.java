package com.api.painelvendas.controllers;

import java.util.List;
import java.util.Optional;

import com.api.painelvendas.dtos.VendedorPostRequestDto;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.painelvendas.models.Vendedor;
import com.api.painelvendas.services.VendedorService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", maxAge = 3600)
@RequestMapping("/vendedor")
public class VendedorController {

	final VendedorService vendedorService;

	public VendedorController(VendedorService vendedorService) {
		this.vendedorService = vendedorService;
	}

	@PostMapping
	public ResponseEntity<Object> saveVendedor(@RequestBody @Valid VendedorPostRequestDto vendedorPostRequestDto) {
		if (vendedorService.existsByEmailVendedor(vendedorPostRequestDto.getEmail())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: Email informado ja em uso!");
		}
		return ResponseEntity.status(HttpStatus.CREATED).body(vendedorService.save(vendedorPostRequestDto));
		}

	@GetMapping
	public ResponseEntity<List<Vendedor>> getAllVendedor(){
		return ResponseEntity.status(HttpStatus.OK).body(vendedorService.findAll());
	}

	@GetMapping("/{id}")
	public  ResponseEntity<Object> getOneVendedor(@PathVariable(value = "id") Integer id){
		Optional<Vendedor> vendedorModelOptional = vendedorService.findById(id);
		if(!vendedorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vendedor não encontrado!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(vendedorModelOptional.get());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteVendedor(@PathVariable(value = "id")Integer id){
		Optional<Vendedor> vendedorModelOptional = vendedorService.findById(id);
		if (!vendedorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vendedor não encontrado!");
		}
		vendedorService.delete(vendedorModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("Vendedor deletado com sucesso!");
	}


	@PutMapping("/{id}")
	public ResponseEntity<Object> updateVendedor(@PathVariable(value = "id") Integer id,
													@RequestBody @Valid VendedorPostRequestDto vendedorPostRequestDto){
		Optional<Vendedor> vendedorModelOptional = vendedorService.findById(id);
		if (!vendedorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vendedor não encontrado!");
		}
		vendedorPostRequestDto.setId(id);
		return ResponseEntity.status(HttpStatus.OK).body(vendedorService.save(vendedorPostRequestDto));
	}

	}
