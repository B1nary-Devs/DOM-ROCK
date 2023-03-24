package com.api.painelvendas.controllers;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.api.painelvendas.dtos.VendedorDto;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.painelvendas.models.VendedorModel;
import com.api.painelvendas.services.VendedorService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/vendedor")
public class VendedorController {

	final VendedorService vendedorService;

	public VendedorController(VendedorService vendedorService) {
		this.vendedorService = vendedorService;
	}

	@PostMapping
	public ResponseEntity<Object> saveVendedor(@RequestBody @Valid VendedorDto vendedorDto) {
		if (vendedorService.existsByEmailVendedor(vendedorDto.getEmailVendedor())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: Email informado ja em uso!");
		}
		if (vendedorService.existsByCpfVendedor(vendedorDto.getCpfVendedor())) {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Conflict: CPF informado ja em uso!");
		}
		var vendedorModel = new VendedorModel();
		BeanUtils.copyProperties(vendedorDto, vendedorModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(vendedorService.save(vendedorModel));
		}

	@GetMapping
	public ResponseEntity<List<VendedorModel>> getAllVendedor(){
		return ResponseEntity.status(HttpStatus.OK).body(vendedorService.findAll());
	}

	@GetMapping("/{id}")
	public  ResponseEntity<Object> getOneVendedor(@PathVariable(value = "id") Integer id){
		Optional<VendedorModel> vendedorModelOptional = vendedorService.findById(id);
		if(!vendedorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vendedor não encontrado!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(vendedorModelOptional.get());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteVendedor(@PathVariable(value = "id")Integer id){
		Optional<VendedorModel> vendedorModelOptional = vendedorService.findById(id);
		if (!vendedorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vendedor não encontrado!");
		}
		vendedorService.delete(vendedorModelOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("Vendedor deletado com sucesso!");
	}


	@PutMapping("/{id}")
	public ResponseEntity<Object> updateParkingSpot(@PathVariable(value = "id") Integer id,
													@RequestBody @Valid VendedorDto vendedorDto){
		Optional<VendedorModel> vendedorModelOptional = vendedorService.findById(id);
		if (!vendedorModelOptional.isPresent()){
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Vendedor não encontrado!");
		}
		var vendedorModel = new VendedorModel();
		BeanUtils.copyProperties(vendedorDto, vendedorModel);
		vendedorModel.setIdVendedor(vendedorModelOptional.get().getIdVendedor());
		return ResponseEntity.status(HttpStatus.OK).body(vendedorService.save(vendedorModel));
	}

	}
